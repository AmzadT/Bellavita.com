require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002
const Connection = require('./Config/db')
const errorHandler = require('./Middlewares/errorHandler.middleware')

// handle routes here
const userRouter = require('./Routes/user.route')
const productRouter = require('./Routes/products.route')

// express middleware to parse JSON data
app.use(express.json())

// routes
app.use('/users', userRouter)
app.use('/products', productRouter)

// Error handler
app.use(errorHandler)

// Cors() middleware to connect frontend from the backend URL with this cors() permit
const cors = require('cors')
app.use(cors({origin: '*'}))

// this route is cheking for server is running fine or not
app.get('/', (req, res)=>{
    res.status(200).send('Server is Running Fine')
})

// this route is for not valid path/page
app.use((req, res)=>{
    res.status(404).send(`<h1>404 - Page Not Found</h1>`)
})

// Server is Running/Listening here
app.listen(PORT, async ()=>{
    try {
        await Connection;
        console.log(`Server is Running On Port : ${PORT} and Connected To the DataBase ✅`);
    } catch (error) {
        console.log(`Error Occurred While Connecting To DataBase ❌ : ${error}`);
    }
})