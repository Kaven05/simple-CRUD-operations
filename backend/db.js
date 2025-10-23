const mongoose  = require('mongoose')
const dburl = require('./DB_URL')
const db = async()=>{
    try {
        const conn = await mongoose.connect(dburl)
        console.log('connected');
        
    } catch (error) {
        console.log(err);
        
    }
}
module.exports = db