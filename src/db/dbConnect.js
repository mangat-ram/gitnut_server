import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnect = async () => {
  try {
    const instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("MongoDB Connected Successfully::  ",instance.connection.host);
  } catch (error) {
    console.log("Mongo Connection Error:: ",error);
  }
}

export { dbConnect };