# 📝 To-Do Manager App

A full-stack **MERN** (MongoDB, Express, React, Node.js) task management application. Create, update, and delete tasks with priority levels, due dates, and completion tracking — all persisted to a MongoDB database.

---

## ✨ Features

- ✅ Add tasks with a title, optional note, priority level, and due date
- ☑️ Checkbox to mark tasks as complete / incomplete
- ✏️ Inline editing — click the pencil icon and edit directly in the list
- 🗑️ Delete tasks with a single click
- 📂 Tasks automatically grouped into **Remaining** and **Completed** sections
- 🌐 REST API backend with full CRUD support
- 💾 Persistent storage via MongoDB

---

## 🗂️ Project Structure

```
to-do-manager-app/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskCard.jsx     # Individual task item (checkbox, edit, delete)
│   │   │   ├── TaskForm.jsx     # Add task form
│   │   │   └── TaskList.jsx     # Task list with pending/completed sections
│   │   ├── App.jsx              # Root component & state management
│   │   └── index.css            # Global styles (light warm theme)
│   ├── vite.config.js           # Vite config with /api proxy
│   └── .npmrc                   # legacy-peer-deps=true
├── server/                  # Express + MongoDB backend
│   ├── controllers/
│   │   └── taskController.js    # CRUD logic
│   ├── models/
│   │   └── Task.js              # Mongoose Task schema
│   ├── routes/
│   │   └── taskRoutes.js        # API route definitions
│   ├── server.js                # Express app entry point
│   └── .env                     # Environment variables (not committed)
└── package.json             # Root orchestration scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone the Repository

```bash
git clone https://github.com/Waffl3l0v3/to-do-list-manager-app.git
cd to-do-list-manager-app
```

### 2. Configure Environment Variables

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=mongodb://localhost:27017/todo-manager
PORT=5000
```

> Replace the `MONGO_URI` value with your MongoDB Atlas connection string if using the cloud.

### 3. Install All Dependencies

From the root directory, run:

```bash
npm run install-all
```

This installs dependencies for the root, `server/`, and `client/` simultaneously.

### 4. Start the Application

```bash
npm run start
```

This uses `concurrently` to launch both:
- **Backend** → `http://localhost:5000`
- **Frontend** → `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| GET    | `/api/tasks`      | Get all tasks        |
| POST   | `/api/tasks`      | Create a new task    |
| PUT    | `/api/tasks/:id`  | Update a task by ID  |
| DELETE | `/api/tasks/:id`  | Delete a task by ID  |

---

## 🧱 Task Schema

```js
{
  title:       String,   // required
  description: String,
  status:      'pending' | 'in-progress' | 'completed',
  priority:    'low' | 'medium' | 'high',
  dueDate:     Date,
  createdAt:   Date
}
```

---

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 18, Vite, Axios, React Icons |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB, Mongoose                 |
| Dev Tools | Concurrently, dotenv              |

---

## 📄 License

This project is for academic/educational use.
