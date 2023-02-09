import mongoose from 'mongoose';
import { db_config } from "../config/index.js";
export default async function dbConnection(){
    return await mongoose.connect(db_config.URL);
}