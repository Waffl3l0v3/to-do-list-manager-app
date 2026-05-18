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
