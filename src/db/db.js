const mongoose = require('mongoose')


function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to DB");
    }).catch(err=>{
        console.log("ERror: ",err);
        
    })
}

module.exports = connectDB