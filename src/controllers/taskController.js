/**
 * This code defines a simple controller for handling tasks in a Node.js application
 * using Express.js and Mongoose for MongoDB interactions.
 */

import Task from "../models/Task.js";

// An asynchronous function that handles the creation of a new task.
export const createTask = async (req, res) => {
    try {
        // `req.body` contains the data sent in the request body, which is used to create a new task.
        const task = await Task.create({
            ...req.body,
            user: req.user.id, // associate task with the logged-in user
        });

        // If the task is successfully created, the function sends a response with a status
        // code of 201 (Created) and the newly created task in JSON format.
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Failed to create task", error:error.message });
    }
};


// An asynchronous function that retrieves all tasks from the database.
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id}); // retrieves all tasks from the db.
        res.json(tasks); // The function sends a response with the list of tasks in JSON format.
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tasks", error: error.message });
    }
};

// Update Task
/**
 * Define an asynchronous function to update a task.
 * This function will be used as a controller in an Express.js route.
 */
export const updateTask = async (req, res) => {
    try {
        // Extract the task ID from the request parameters.
        // This ID is used to identify which task to update.
        const { id } = req.params

        // Extract the task details from the request body.
        // These details are the new values for the task's fields.
        const { title, description, priority, dueDate } = req.body;

        // find the task in the database by its ID.
        const task = await Task.findById(id);

        // If the task is not found, return a 404 status code with an error message.
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Check if the user who is making the request owns the task.
        /**
         * This is done by comparing the user ID associated with the task to
         * the user ID in the request object.
         * 
         */
        if (task.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to update this task" });
        }

        // Update the task's fields with the new values from the request body.
        // If a field is not provided in the request body, keep the existing value.
        task.title = title || task.title;
        task.description = description || task.description;
        task.priority = priority || task.priority;
        task.dueDate = dueDate || task.dueDate;

        // Save the updated task to the database.
        await task.save();

        // Return a success response with a 200 status code and the updated task.
        res.status(200).json({ message: "Task updated successfully", task });
    } catch (error) {
        // If an error occurs during the process, return a 500 status code
        // with an error message and the error details.
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Delete a task
// Define an asynchronous function to delete a task.
export const deleteTask = async (req, res) => {
    try {
        // Extract the task ID from the request parameters.
        // This ID is used to identify which task to delete.
        const { id } = req.params;

        // Find the task in the database by its ID.
        const task = await Task.findById(id);

        // If the task is not found, return a 404 status code with an error message.
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Check if the user who is making the request owns the task.
        /**
         * This is done by comparing the user ID associated with the task
         * to the user ID in the request object.
         */
        if (task.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to delete this task" });
        }

        await task.deleteOne(); // Delete the task from the database.

        // Return a success response with a 200 status code.
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        // If an error occurs during the process, return a 500 status code
        // with an error message and the error details.
        res.status(500).json({ message: "Server error", error: error.message });
    }
};