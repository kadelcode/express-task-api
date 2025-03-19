/**
 * This code snippet defines a set of routes for handling task-related operations
 * in a web application using Express.js, a popular Node.js framework.
 */

import express from "express";

// Controllers typically contain the business logic for handling requests
import { createTask, getTasks, updateTask } from "../controllers/taskController.js";

// Middleware functions are used to perform actions before or after a route handle
// is executed, such as authentication or authorization.
import authMiddleware from "../middlewares/authMiddleware.js";

/**
 * Creates a new router object. Routers are used to group related routes together
 * and can be mounted on a specific path in the main application.
 */
const router = express.Router();

router.post("/", authMiddleware, createTask); // Create a task (protected)
router.get("/", authMiddleware, getTasks); // Get all tasks (protected)
router.put("/update", authMiddleware, updateTask); // Update a task (protected)

export default router;