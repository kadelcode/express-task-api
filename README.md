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

---

## 📦 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **Security:** Helmet, CORS, bcrypt.js
- **Deployment:** Render / Docker
- **Dev Tools:** Postman, Nodemon, ESLint

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
bash
```
git clone https://github.com/kadelcode/express-task-api.git
cd express-task-api
```

### 2. Install Dependencies
```
npm install
```

### 3. Environment variables
Create a ```.env``` file:
```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server
```
npm run dev
```

---

## 📮 API Endpoints

### 🔐 Authentication
| Method | Route | Description |
| ------ | ----- | ----------- |
| POST   | ```/api/auth/register``` | Register a new user |
| POST   | ```/api/auth/login```    | Login and get token |

### ✅ Tasks
| Method | Route | Description |
| ------ | ----- | ----------- |
| GET    | ```/api/tasks```     | Get all tasks (User/Admin) |
| POST   | ```/api/tasks```     | Create new task (User)     |
| GET    | ```/api/tasks/:id``` | Get single task            |
| PUT    | ```/api/tasks/:id``` | Delete task (Owner/Admin)   |

> 🔐 All task routes are protected and require JWT token in the ```Authorization``` header.

---

## 🧪 Testing with Postman
1. Import the included Postman collection (or test manually)
2. Authenticate a user to receive a token
3. Use the token as ```Bearer <token>``` in ```Authorization``` header

---

## 🐳 Docker Support
### Build & Run with Docker
```
docker-compose up --build
```

---

## 🛠️ CI/CD (Optional Setup)
You can set up GitHub Actions like:
- Lint on PRs
- Run tests
- Auto-deploy to Render or Heroku

---

## 📌 Future Enhancements

- Real-time task updates with Socket.io
- File attachments per task
- Notification system
- Comments per task
- Frontend integration with Next.js (done)

---

## 🧑‍💻 Author
Built with 💻 by [Kadel](https://github.com/kadelcode)

---

## 📄 License
This project is licensed under the MIT License.
