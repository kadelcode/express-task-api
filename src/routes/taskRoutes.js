/**
 * This code snippet defines a set of routes for handling task-related operations
 * in a web application using Express.js, a popular Node.js framework.
 */

import express from "express";

// Controllers typically contain the business logic for handling requests
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";

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
router.put("/:id", authMiddleware, updateTask); // Update a task (protected)

// Define a DELETE route for deleting a task.
// The route is protected by the `authMiddleware` middleware, ensuring only authenticated users can access it.
// The `deleteTask` controller function is called to handle the delete logic.
router.delete("/:id", authMiddleware, deleteTask)

export default router;