// This code defines a Mongoose schema fo a `Task` model in a Node.js application.

import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true }, // Title of the task
        description: String, // Task details which is optional

        // This field is used to associate a task with a specific user
        assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

        // Task's priority. Default value is `medium`
        priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },

        dueDate: Date, // A data field to specify when the task is due.

        // Task's status
        status: { type: String, enum: ["todo", "in-progress", "done", "overdue"], default: "todo" },

        // Task's user
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        
        // Task completion date
        completedAt: { type: Date, default: null },
    },
    /**
     * An option that automatically adds `createdAt` and `updatedAt` fields to the
     * scheme to track when documents are created and last modified.
     */
    { timestamps: true }
);

/**
 * This line creates a Mongoose model named `Task` using the defined schema.
 * The model can be used to interact with the `tasks` collection in the MongoDB database,
 * allowing for CRUD (Create, Read, Update, Delete) operations.
 */
export default mongoose.model("Task", TaskSchema);