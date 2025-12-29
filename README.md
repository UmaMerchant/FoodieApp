# 🍽️ FoodiiApp – Full Stack Online Food Ordering System

## 📌 Overview
**FoodiiApp** is a scalable full-stack online food ordering platform designed for modern food businesses.  
It supports multiple user roles and provides a complete workflow from restaurant onboarding to order management and payments.

The application is built with a clean separation of frontend and backend, making it easy to customize, extend, and deploy for different business needs.

- 🧑‍💻 **Guest Users** – Browse and explore restaurants
- 👤 **Registered Users** – Place and track orders
- 👨‍🍳 **Restaurant Owners** – Manage restaurants and food items
- 🛡️ **Admin** – Control platform access and restaurant approvals

---

## 🛠️ Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | React, Material UI     |
| Backend    | Spring Boot (Java)     |
| Database   | MongoDB                |
| Payment    | Razorpay (Test Mode)   |
| Auth       | JWT + Local Storage    |

---

## ✨ Key Features

### 👤 Guest Portal
- View all available restaurants
- Search, sort, and filter by cuisine
- Browse About Us and Contact pages

### 🔐 User Portal
- Register and login securely
- Add items to cart and place orders
- Make payments via Razorpay (test mode)
- View and track order history

### 👨‍🍳 Restaurant Owner Portal
- Login with role-based access
- Add and manage own restaurants
- Add, edit, and delete food items
- Accept or reject user orders

### 🛡️ Admin Portal
- Approve or reject restaurant owner registrations
- Enable or disable restaurants
- View and manage all users and restaurants

---

## 💡 Use Cases
- Online food ordering startups
- Restaurant chain management systems
- Cloud kitchen platforms
- College or office cafeteria ordering systems
- Custom food delivery solutions for local businesses

---

## 📂 Folder Structure

```
FoodiiApp/
├── frontend/             # React frontend application
├── backend/              # Spring Boot backend application
├── screenshots/          # UI screenshots (documentation only)
├── .gitignore
└── README.md
```

---

## 📸 UI Screenshots
UI screenshots demonstrating different user flows are available in the  
`screenshots/` folder, including:
- Guest browsing experience
- User ordering journey
- Restaurant owner dashboard
- Admin management panels

---
## 🚀 Running the Application Locally

### 🔧 Backend – Spring Boot

```bash
cd backend
mvn spring-boot:run
```

📌 Ensure MongoDB is running locally on  
`mongodb://localhost:27017`

---

### 🎨 Frontend – React

```bash
cd frontend
npm install
npm start
```

🌐 Frontend will run at:  
`http://localhost:3000/`

---

## 🔐 Test Credentials (Demo Only)

| Role  | Email                    | Password |
|-------|--------------------------|----------|
| User  | umamerchant176@gmail.com | uma123   |
| Owner | owner4@gmail.com         | owner4   |
| Admin | umaadmin@gmail.com       | uma      |

---

## 👤 Author
**Uma Merchant**  
Full Stack Developer  
Open to freelance and project-based opportunities  
https://www.linkedin.com/in/uma-merchant-7a516415b

---

## 📄 License
This project is maintained as a **portfolio and demonstration project**.

