// Database Configuration

// Imports an Object Data Modeling (ODM) library
// It provides a straightforward, scheme-based solution to model your application data.
import mongoose from "mongoose";

// Asynchronous function to handle asynchronous operations.
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { // Connect ot a MongoDB database
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

export default connectDB;