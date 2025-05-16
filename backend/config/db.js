const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

mongoose.connect(url)
.then(()=>{
    console.log("MongoDb Connection Successfully..");
}).catch((err)=>{
    console.log("MongoDb Connection Failed..", err);
})