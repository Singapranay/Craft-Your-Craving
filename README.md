# ReserveTable

# 🪑 Table Reservation System

The **Table Reservation System** is a full-stack web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** that allows users to reserve tables at restaurants across **India**.

## 🌐 Features

- 🔍 Search and browse restaurants across different cities in India.
- 📅 Reserve tables for your desired date and time.
- 👤 User registration and login system with authentication.
- 📬 Email confirmation for reservations (optional if integrated).
- 🛡️ Secure backend API built with Express and Node.js.
- 💾 Data stored and managed in MongoDB.
- 📱 Responsive design using modern React UI.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS / Bootstrap (choose one you used)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT / Passport (mention based on your setup)

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/craft-Your-Craving.git
cd reserve-table
````

### 2. Install dependencies

**Backend:**

```bash
cd server
npm install


### 3. Set up environment variables

Create `.env` files in both `server` and `client` directories (if needed). Example for backend:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the app

**Backend:**

```bash
cd reserve-table
npm app.js
