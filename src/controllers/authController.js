import User from "../models/User.js"; // Imports the User model
import jwt from "jsonwebtoken"; // Used for creating and verifying JSON Web Tokens(JWTs) for authentication
import bcrypt from "bcrypt"; // For hashing passwords


// This function handles user registration
export const register = async (req, res) => {
    const { name, email, password } = req.body; // Extracts parameters from request body
    
    const existingUser = await User.findOne({ email });

    // Checking for existing user
    if (existingUser) {
        return res.status(400).json({ message: "Email is already in use" });
    }
    
    const user = await User.create({ name, email, password }); // Creates a new user in the db.

    /**
     * Sends a  201 (Created) status code and a JSON response containing a 
     * success message and the newly created user object.
     */
    res.status(201).json({ message: "User registered", user });
};

// This function handles user login
export const login = async (req, res) => {
    const { email, password } = req.body; // Extracts `email` and `password` from the request body

    // Finds a user with the provided email address in the database.
    const user = await User.findOne({ email });

    // Checks if a user with the given email exists
    /**
     * It uses `bcrypt.compare(password, user.password)` to compare the provided
     * password with the stored (hashed) password. If the passwords don't match, or
     * if the user is not found, it returns a 401 (Unauthorized) status code with an
     * "Invalid credentials" message
     */
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // If the credentials are valid, it generates a JWT using `jwt.sign()`
    /**
     * The JWT payload includes the user's `_id` and `role`.
     * `process.env.JWT_SECRET` is used as the secret key for signing the JWT. This secret should
     * be securely stored in environment variables.
     * It sends a JSON response containing the generated JWT.
     */
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
}