const { User } = require('../models/user.model');
const { Transfer } = require('../models/transfer.model');

const createAccount = async (req, res) => {
    try {
        //Getting data from the body of the request
        const { name, password } = req.body;

        //Creating a random number of 7 digits
        const accountNumber = Math.ceil(Math.random() * 10000000);

        //Creating the new account
        const newUser = await User.create({ name, password, accountNumber });

        res.status(200).json({ newUser });
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    try {
        const { accountNumber, password } = req.body;
        const foundUser = await User.findOne(
            { 
                where: { accountNumber, password } 
            });

        if (!foundUser) {
            return res.status(400).json({
                status: 'error',
                message: 'User not found for the providen credentials',
            });
        }

        res.status(200).json({ foundUser });
    } catch (error) {
        console.log(error);
    }
};

const getAllTransactions = async (req, res) => {
    try {
        const { id } = req.params;
        const userTransactions = await Transfer.findAll({
            where: { senderUserId: id },
        });

        if (userTransactions.length === 0) {
            return res.status(400).json({
                status: 'error',
                message: `The user with the id ${id} hasn't registered transfers history`,
            });
        }

        res.status(200).json({ userTransactions });
    } catch (error) {
        console.log(error);
    }
};






const getAllUsers = async (req, res) => {
    const users = await User.findAll();

    res.status(200).json({ users });
};

module.exports = { createAccount, login, getAllTransactions,
getAllUsers };
