# 🍽️ FoodiiApp – Full Stack Online Food Ordering System

## 📌 Overview
**FoodiiApp** is a full-stack food delivery platform inspired by Zomato and Swiggy. It supports four types of users:

- 🧑‍💻 **Guest Users** – Browse and explore restaurants
- 👤 **Registered Users** – Place and track orders
- 👨‍🍳 **Restaurant Owners** – Manage restaurants and food items
- 🛡️ **Admin** – Approve new restaurant registrations and control platform access

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
- Register and login
- Add items to cart and place orders
- Make payments via Razorpay (test mode)
- View and track order history

### 👨‍🍳 Restaurant Owner Portal
- Login with role-based access
- Add/edit own restaurants
- Add, edit, delete food items
- Approve or reject user orders

### 🛡️ Admin Portal
- Approve/reject restaurant owner signup requests
- Enable or disable restaurants
- View all users and restaurants

---

## 📂 Folder Structure

```
FoodiiApp/
├── frontend/             # React frontend app
├── backend/              # Spring Boot backend app
├── screenshots/          # UI screenshots (for documentation only)
├── code-snippets/        # Code screenshots (for viva/report only)
├── .gitignore
└── README.md
```

## 📸 UI Screenshots

| Screen                       | Filename                                      |
|-----------------------------|-----------------------------------------------|
| Home Page (Guest)           | `screenshots/01_HomePage_Guest.png`           |
| Sign Up Page                | `screenshots/02_SignUpPage.png`               |
| Login Page                  | `screenshots/03_LoginPage.png`                |
| About Us Page               | `screenshots/04_AboutUsPage.png`              |
| Contact Us Page             | `screenshots/05_ContactUsPage.png`            |
| User Dashboard              | `screenshots/06_UserDashboard_Restaurants.png`|
| Cart View                   | `screenshots/07_UserCartView.png`             |
| Order History               | `screenshots/08_UserOrderHistory.png`         |
| Owner Dashboard             | `screenshots/09_OwnerDashboard_Main.png`      |
| Add New Restaurant          | `screenshots/10_Owner_AddNewRestaurant.png`   |
| Admin Dashboard             | `screenshots/11_AdminDashboard_Main.png`      |
| Approved Restaurants        | `screenshots/12_AdminApprovedRestaurants.png` |
| Pending Approvals           | `screenshots/13_AdminRestaurantApprovalQueue.png`|

---

## 🚀 Running the App

### 🔧 Backend – Spring Boot

```bash
# Step into backend folder
cd backend

# Run using Maven
mvn spring-boot:run
```

📌 Ensure MongoDB is running locally on `mongodb://localhost:27017`.

### 🎨 Frontend – React

```bash
# Step into frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

🌐 Frontend will run at: `http://localhost:3000/`

---

## 🔐 Test Credentials

| Role    | Email                    | Password   |
|---------|--------------------------|------------|
| User    | umamerchant176@gmail.com | uma123     |
| Owner   | owner4@gmail.com         | owner4     |
| Admin   | umaadmin@gmail.com       | uma        |

---

## 👤 Author

**Uma Merchant**  
Full Stack Developer – Gen AI Capstone Project  
[LinkedIn](https://www.linkedin.com/in/uma-merchant-7a516415b)


---

## 📄 License

This project was developed as part of NIIT's Full Stack Developer with Gen AI Program.

