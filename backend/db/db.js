const mongoose = require('mongoose')

const connectdb = async()=>{
    try {
        
        await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
        console.log('database is connected successfully!!!');
        
    } catch (error) {
        console.log('error connecting database!!');
        
    }
}

module.exports = {connectdb}; //exporting connectdb