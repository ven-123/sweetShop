# Sweet Shop Application

A full-stack web application for managing and purchasing sweets. Built with **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

---

## Features
- User registration and login with JWT authentication.
- Dashboard to view all available sweets.
- Search and filter sweets by name, category, and price.
- Purchase sweets (disabled if quantity is zero).
- Admin can add, update, delete, and restock sweets.
- Secure REST API with role-based access.

---

## Project Structure
```
sweetShop/
│── backend/        # Express + MongoDB API
│── frontend/       # React.js Single Page Application
│── .env            # Environment variables
│── package.json    # Root config (if needed)
```
---

## Installation & Setup

### 1️.Clone the repository
```bash
git clone https://github.com/your-username/sweetShop.git
cd sweetShop
```

### 2️.Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in backend/ and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend:
```bash
npm start
```

### 3️.Frontend Setup
```bash
cd frontend
npm install
npm start
```
This runs React app on `http://localhost:3000`.

---

## 🔑 API Endpoints

### Auth
- **POST /api/auth/register** – Register a new user  
- **POST /api/auth/login** – Login and get JWT token  

### Sweets (Protected)
- **POST /api/sweets** – Add a sweet  
- **GET /api/sweets** – View all sweets  
- **GET /api/sweets/search** – Search sweets by name/category/price  
- **PUT /api/sweets/:id** – Update sweet details  
- **DELETE /api/sweets/:id** – Delete sweet (Admin only)  

### Inventory (Protected)
- **POST /api/sweets/:id/purchase** – Purchase a sweet  
- **POST /api/sweets/:id/restock** – Restock a sweet (Admin only)  

---

## 🧪 Running Tests
```bash
cd backend
npm test
```

### ✅ Test Report
```
 PASS  tests/auth.test.js
 PASS  tests/sweets.test.js
 PASS  tests/inventory.test.js

Test Suites: 3 passed, 3 total
Tests:       12 passed, 12 total
```
---

## 📜 License
MIT License © 2025 Sweet Shop Application

