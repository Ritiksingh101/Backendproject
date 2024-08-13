import mongoose from "mongoose";
import { DB_NAME } from "../config.js";


const cannectDB = async()=> {
    try{
       const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB cannected !!!..... DB HOSt ${connectionInstance.connection.host}`)
    }
    catch (error){
          console.log("Mongoose cannection erroe" , error);
          process.exit(1)
    }
}

export default cannectDB