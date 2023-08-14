const mongoose = require('mongoose')

async function connectionDB(url) {
   return mongoose.connect(url).then(() => { console.log("Databse Connected") }).catch((err) => { console.log("MongoDB Error : ", err) })
} 

module.exports = {connectionDB}