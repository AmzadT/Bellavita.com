const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3002
const connection = require('./Config/db')
app.use(express.json())
const userRouter = require('./Routes/user.route')
const productRouter = require('./Routes/products.route')
app.use('/user', userRouter)
app.use('/products', productRouter)
const cors = require('cors')
app.use(cors({origin: '*'}))


app.get('/', (req, res)=>{
    res.send('Server is Running Fine')
})


app.listen(PORT, async ()=>{
    try {
        await connection
        console.log(`Server is Running On Port : ${PORT} and Connected To DataBase ✅`);
    } catch (error) {
        console.log(`Error Occurred While Connected To The DataBase ❌ : ${error}`);
    }
})