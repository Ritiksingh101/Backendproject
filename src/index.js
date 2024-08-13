import dotenv from "dotenv"
import mongoose from "mongoose";
import cannectDB from "./db/db.js";

dotenv.config({
    path:"/env"
})
cannectDB()