const mongoose = require('mongoose');

async function connection() {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/mern-cafe-app') 
        if (conn) {
            console.log('db connected ...');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;