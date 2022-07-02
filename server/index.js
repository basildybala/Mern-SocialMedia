const express = require('express') 
const bodyParser = require('body-parser') 
const morgan = require('morgan') 
const dotenv = require('dotenv') 
const connectDB = require ('../server/database/connection')

dotenv.config()
const app=express();
app.use(morgan('tiny'))

//Connect Db
connectDB()


app.listen(process.env.PORT || 3002,()=>{
    console.log(`Sever Running ${process.env.PORT}`);
})