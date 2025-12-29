🍽️ FoodiiApp – Full Stack Online Food Ordering System
📌 Overview

FoodiiApp is a scalable full-stack online food ordering platform designed for modern food businesses.
It supports multiple user roles and provides a complete workflow from restaurant onboarding to order management and payments.

The application is built with a clean separation of frontend and backend, making it easy to customize, extend, and deploy for different business needs.

👥 User Roles & Capabilities
🧑‍💻 Guest Users

Browse and explore available restaurants

Search, sort, and filter restaurants by cuisine

View static pages like About Us and Contact

👤 Registered Users

Register and log in securely

Add food items to cart and place orders

Make payments using Razorpay (test mode)

Track order history and order status

👨‍🍳 Restaurant Owners

Role-based secure login

Add and manage their own restaurants

Add, edit, or delete food items

Accept or reject incoming orders

🛡️ Admin

Approve or reject restaurant owner registrations

Enable or disable restaurants

View and manage all users and restaurants

🛠️ Tech Stack
Layer	Technology
Frontend	React, Material UI
Backend	Spring Boot (Java)
Database	MongoDB
Payments	Razorpay (Test Mode)
Auth	JWT + Local Storage
✨ Key Features

Role-based authentication and authorization

Modular REST APIs with Spring Boot

Secure JWT-based login system

Payment gateway integration (Razorpay – test mode)

Responsive and user-friendly UI

Scalable architecture suitable for startups and SaaS products

💡 Use Cases

Online food ordering startups

Restaurant chain management systems

Cloud kitchen platforms

College or office cafeteria ordering systems

Custom food delivery solutions for local businesses

📂 Folder Structure
FoodiiApp/
├── frontend/             # React frontend application
├── backend/              # Spring Boot backend application
├── screenshots/          # UI screenshots (documentation only)
├── .gitignore
└── README.md


⚠️ Note:
Any non-production folders (like internal notes or snippets) are excluded to keep the repository clean and deployment-ready.

📸 UI Screenshots
Screen	Filename
Home Page (Guest)	screenshots/01_HomePage_Guest.png
Sign Up Page	screenshots/02_SignUpPage.png
Login Page	screenshots/03_LoginPage.png
About Us Page	screenshots/04_AboutUsPage.png
Contact Us Page	screenshots/05_ContactUsPage.png
User Dashboard	screenshots/06_UserDashboard_Restaurants.png
Cart View	screenshots/07_UserCartView.png
Order History	screenshots/08_UserOrderHistory.png
Owner Dashboard	screenshots/09_OwnerDashboard_Main.png
Add New Restaurant	screenshots/10_Owner_AddNewRestaurant.png
Admin Dashboard	screenshots/11_AdminDashboard_Main.png
Approved Restaurants	screenshots/12_AdminApprovedRestaurants.png
Pending Approvals	screenshots/13_AdminRestaurantApprovalQueue.png
🚀 Running the Application Locally
🔧 Backend – Spring Boot
cd backend
mvn spring-boot:run


📌 Ensure MongoDB is running locally on:

mongodb://localhost:27017

🎨 Frontend – React
cd frontend
npm install
npm start


🌐 Frontend runs at:
http://localhost:3000/

🔐 Test Credentials (Demo Purpose Only)
Role	Email	Password
User	umamerchant176@gmail.com
	uma123
Owner	owner4@gmail.com
	owner4
Admin	umaadmin@gmail.com
	uma
👤 Author

Uma Merchant
Full Stack Developer
📌 Open to freelance and project-based opportunities
🔗 LinkedIn: www.linkedin.com/in/uma-merchant-7a516415b

📄 License

This project was originally developed as part of a full-stack development program and is now maintained as a portfolio and demonstration project.

📄 License

This project was originally developed as part of a full-stack development program and is now maintained as a portfolio and demonstration project.
