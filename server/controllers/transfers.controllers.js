const { Transfer } = require('../models/transfer.model.js');
const { User } = require('../models/user.model');

const createTransaction = async (req, res) => {
    try {
        //Getting data from the body of the request
        const { amount, senderUserId, receiverUserId } = req.body;

        //Get both users involved in transfer
        const senderUser = await User.findOne({
            where: { id: senderUserId },
        });
        const receiverUser = await User.findOne({
            where: { id: receiverUserId },
        });

        //Checking the sender user account exists
        if (!senderUser) {
            return res.status(400).json({
                status: 'error',
                message: 'Number account is not registered yet',
            });
        }

        //Checking the sender user account balance is greater than the amount to be transfered
        if (senderUser.amount < amount) {
            return res.status(400).json({
                message:
                    'The amount entered is greater than the account balance',
            });
        };

        //Saving the new account balance of each user after the transfer
        const senderNewBalance = senderUser.amount - amount;
        const receiverNewBalance = receiverUser.amount + amount;

        //Updating each users accont balance
        await senderUser.update({ amount: senderNewBalance });
        await receiverUser.update({ amount: receiverNewBalance });

        const newTransaction = await Transfer.create({
            amount,
            senderUserId,
            receiverUserId,
        });

        res.status(201).json({ newTransaction });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createTransaction };
