/**
 * Imports the Mongoose library, which provides a way to interact
 * with MongoDB databases using JavaScripts objects.
 */
import mongoose from "mongoose";

import bcrypt from "bcrypt"; // Imports the `bcrypt` library, used for securely hashing passwords.

// Defining the User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Pre-save Middleware for Password Hashing
// This will be executed before a `User` document is saved to the database.
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Checks if the password has been modified

    // The `10` is the salt roundes, which determines the strength of the hash.
    // Higher numbers increase security but also increase computation time.
    this.password = await bcrypt.hash(this.password, 10);

    // Calls the `next()` function to continue with the save operation after
    // password has been hashed.
    next();
});


// Exports the User model
// This creates a Mongoose model name "User" using the defined "UserSchema"
export default mongoose.model("User", UserSchema);