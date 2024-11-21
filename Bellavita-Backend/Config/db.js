require('dotenv').config()
const mongoose = require('mongoose')

// here connecting our server to the database via/through mongoose
const Connection = mongoose.connect(process.env.MONGO_URL)
module.exports = Connection;