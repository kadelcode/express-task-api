/**
 * Import express, a popular web framework for Node.js that simplifies
 * the process of building web servers and APIs.
 */
import express from "express";

// These functions contain the logic for handling user registration and login, respectively
import { register, login } from "../controllers/authController.js";

/**
 * This creates a new router object, which is a mini Express application
 * that can handle routing.
 * 
 * It allows you to define routes and their corresponding handlers.
 */
const router = express.Router();

router.post("/register", register); // User registration
router.post("/login", login); // User login

export default router;