const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(`Error - database connection failed: ${error}`);
        process.exit(1);
    }   
};

module.exports = connectDB;


//this will be responsible for connecting to mongodb db using mongooe tool , using a connectdb function w
// we are connecting asynchronously to db meanwhile server will continue to run , if any error is there it will 
//caughht in catch block and displayed using err.message and process will exit with failure code 1.