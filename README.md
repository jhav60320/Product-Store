# 🛒 Product Store (MERN Stack)

A full-stack **Product Store** application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. This app allows users to view and manage products with a clean user interface and a powerful backend API.

---

## 📁 Project Structure

product-store/
├── backend/
│ ├── config/ # MongoDB connection config
│ ├── controllers/ # API route logic
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ └── server.js # Entry point of backend
├── frontend/ # React app (UI)
├── .env # Environment variables
├── package.json # Project scripts and dependencies


---

## 🚀 Features

- Backend API with **Express.js**
- **MongoDB** with **Mongoose** for data storage
- Fully functional **React.js** frontend
- API routes to **Create**, **Read**, and **List Products**
- Organized modular code structure
- Ready for **development** and **production**

---

## 🔧 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/product-store.git
cd product-store

### 2. Install Dependencies
npm install
cd frontend && npm install

### 3. Set Up Environment Variables
Create a .env file in the root folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development

### 4. Run the App
npm run dev

##🌐 API Endpoints
| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/api/products` | Get all products  |
| POST   | `/api/products` | Add a new product |

## 📦 Sample Product Schema
{
  name: String,     // Product name
  price: Number,    // Product price
  image: String,    // Image URL
  timestamps: true  // createdAt, updatedAt
}
