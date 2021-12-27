const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dbConnection = require('./db/connection');
dbConnection();

app.use(require('./router/routes'));

app.listen(5000, () => {
    console.log('listening on port 5000');
})