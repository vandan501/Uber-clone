const mongoose=require("mongoose");

const connectToDb = ()=>{
    mongoose.connect(process.env.DB_URI) 
    .then(()=>{
        console.log("Database Connected Successfully")
    })
    .catch(Error => console.error(Error))
}

module.exports = connectToDb;