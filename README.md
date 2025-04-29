# Task Manager API (Trello Clone - Backend)

A RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for managing tasks with user authentication and role-based access control (RBAC).

## 🚀 Features

- User registration and login (JWT-based authentication)
- Role-based access control (Admin/User)
- Create, update, delete, and get tasks
- Assign tasks to users
- Set task priority and due dates
- Fully documented with Postman
- Ready for deployment with Docker & CI/CD

---

## 🏗️ Project Structure
project-root/ ├── node_modules/ # Dependencies ├── public/ # Static files ├── src/ # Source code │ ├── controllers/ # Route logic │ ├── models/ # Mongoose models │ ├── routes/ # Express route definitions │ ├── utils/ # Utility functions │ └── app.js # Express app ├── .env # Environment variables ├── .gitignore ├── package.json ├── README.md └── index.js # Entry point
