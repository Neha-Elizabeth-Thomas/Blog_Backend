
```markdown
# 📝 MERN Blog Backend

This is the **backend API** for a simple blog application built using the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It provides RESTful endpoints for creating and retrieving blog posts.

---

## 🚀 Features

- Create a new blog post (title, content, author)
- Get all blog posts
- MongoDB database integration using Mongoose
- Clean structure with controllers, services, and routers

---

## 📁 Folder Structure

```

backend/
├── models/
│   └── Blog.js
├── app.js
├── .env
└── package.json

````

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-blog.git
cd mern-blog/backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the `backend` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., from MongoDB Atlas).

### 4. Run the backend server

```bash
node server.js
```

Or use `nodemon` for development (auto-restarts on save):

```bash
npx nodemon server.js
```

---

## 📮 API Endpoints

### Base URL: `http://localhost:3000`

#### ➕ POST `/`

Create a new blog

* Body Parameters:

  ```json
  {
    "title": "Sample Blog Title",
    "content": "This is the content of the blog.",
    "author": "Author Name"
  }
  ```

#### 📥 GET `/`

Retrieve all blog posts

---

## 📦 Dependencies

* express
* mongoose
* dotenv
* cors
* nodemon (dev)

---

## ✅ Sample Blog Data

You can insert sample data using MongoDB Compass or the Mongo Shell:

```js
db.blogs.insertMany([
  {
    title: "Getting Started with the MERN Stack",
    content: "This guide will walk you through the basics.",
    author: "Jane Doe"
  },
  ...
]);
```

---

## 🛠 Future Enhancements

* Blog update/delete functionality
* User authentication (login/register)
* Pagination and filtering

---

## 🧑‍💻 Author

Built by [Neha Elizabeth Thomas](https://github.com/Neha-Elizabeth-Thomas) – feel free to reach out with feedback!

```

---

Let me know if you want a combined `README.md` for both frontend and backend, or want to add Swagger/OpenAPI docs, too.
```
