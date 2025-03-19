/**
 * This code defines a simple controller for handling tasks in a Node.js application
 * using Express.js and Mongoose for MongoDB interactions.
 */

import Task from "../models/Task.js";

// An asynchronous function that handles the creation of a new task.
export const createTask = async (req, res) => {
    // `req.body` contains the data sent in the request body, which is used to create a new task.
    const task = await Task.create(req.body);

    // If the task is successfully created, the function sends a response with a status
    // code of 201 (Created) and the newly created task in JSON format.
    res.status(201).json(task);
};


// An asynchronous function that retrieves all tasks from the database.
export const getTasks = async (req, res) => {
    const tasks = await Task.find(); // retrieves all tasks from the db.
    res.json(tasks); // The function sends a response with the list of tasks in JSON format.
}