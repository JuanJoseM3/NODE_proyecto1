const express = require('express');
const router = express.Router();

const { createTransaction } = require('../controllers/transfers.controllers');

router.post('/', createTransaction);

module.exports = { transferRouter: router };