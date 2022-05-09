const express = require('express');
const router = express.Router();
const {
    createAccount,
    login,
    getAllTransactions, getAllUsers
} = require('../controllers/users.controllers');

router.post('/signup', createAccount);
router.post('/login', login);
router.get('/:id/history', getAllTransactions);


router.get('/users', getAllUsers);

module.exports = { usersRouter: router };