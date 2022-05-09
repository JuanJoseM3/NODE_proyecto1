const express = require('express');
const { db } = require('./utils/database');
const cors = require('cors');
const { usersRouter } = require('./routes/user.routes');
const { transferRouter } = require('./routes/transfer.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transferRouter);

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(error => console.log(error))

db.sync()
    .then(() => console.log('Database synced'))
    .catch(error => console.log(error))

const PORT = 3016;

app.listen(PORT, () => {
    console.log(`Express app running on port: ${PORT}`);
});