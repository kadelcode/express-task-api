// Database Configuration

// Imports an Object Data Modeling (ODM) library
// It provides a straightforward, scheme-based solution to model your application data.
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

// Asynchronous function to handle asynchronous operations.
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

export default connectDB;