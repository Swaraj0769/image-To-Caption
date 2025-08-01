require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')

connectDB()

/* 
POST /login 
POST /register 
Get /profile */

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})