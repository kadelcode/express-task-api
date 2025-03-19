// Entry point of the program

// The core framework for building web applications and APIs in Node.js
import express from "express";

// Loads environment variables from a `.env` file into `process.env`
import dotenv from "dotenv";

// Enable Cross-Origin Resource Sharing, allowing requests from different origins
import cors from "cors";

// Adds security headers to protect against common web vulnerabilities
import helmet from "helmet";

// Logs HTTP requests for debugging and monitoring
import morgan from "morgan";

// Connects to a database (MongoDB)
import connectDB from "./config/db.js";

// Router module containing routes related to tasks
import taskRoutes from "./routes/taskRoutes.js";

// Router module containing routes related to authentication
import authRoutes from "./routes/authRoutes.js"; // `authRoutes` is just an alias for the `router` instance we exported

dotenv.config(); // Loads environment variables from a `.env` file into `process.env`
connectDB(); // Calls the function to establish a connection to the database

const app = express(); // Creates an instance of the Express application

/**
 * Enables parsing of JSON request bodies.
 * This middleware allows the server to understand and process
 * JSON data sent in the request.
 */
app.use(express.json());

// Enables CORS for all routes, allowing request from any origin.
app.use(cors());

// Adds various HTTP headers for security, such as:
// Strict-Transport-Security
// X-Frame-Options
// X-XSS-Protection
app.use(helmet());

/**
 * Enables logging of HTTP requests in the "dev" format,
 * which provides concise and informative output in the console.
 */
app.use(morgan("dev"));

/**
 * Any request to `/api/tasks/*` will be handled by the
 * routes defined in `taskRoutes.js`
 */
app.use("/api/tasks", taskRoutes);

// Requests to `/api/auth/*` will be handled by the authentication routes.
app.use("/api/auth", authRoutes);

// Starts the express server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
})