import mongoose from "mongoose";
import { MONGO_URI } from "./serverConfig.js";

export const connectDB = async function () {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`connected to mongoDb database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error, "Something went wrong");
  }
};
