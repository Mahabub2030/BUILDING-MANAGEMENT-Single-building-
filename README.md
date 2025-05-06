# 🏢 Building Management System (BMS)

A full-stack, responsive web application for managing a single apartment building with three distinct roles: **User**, **Member**, and **Admin**. This system allows for apartment booking, payments, coupon management, role-based dashboards, announcements, and more.

---

## 🔗 Live Site
👉 [View Live Website](pending)

---

## 🔐 Admin Credentials
- **Email:** admin@example.com  
- **Password:** your_admin_password  

---

## 🚀 Project Purpose
To develop a feature-rich, responsive, and scalable **Building Management System** (BMS) using modern technologies that supports role-based access, real-time data management, and secure authentication with Firebase, MongoDB, and JWT.

---

## 📦 Tech Stack

### 🖥️ Frontend
- React.js
- Tailwind CSS
- React Router DOM
- TanStack Query (for GET requests)
- SweetAlert2 / React Hot Toast (for notifications)
- Firebase Authentication
- Axios

### 🌐 Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Token)
- CORS
- Dotenv

---

## 🌟 Key Features

1. 🔐 Role-based login: Admin, User, and Member with Firebase Auth + JWT token
2. 🧾 Apartment agreement with real-time status tracking and approval by admin
3. 💸 Member payments with coupon support and payment history tracking
4. 📣 Announcement system managed by Admin for Users and Members
5. 📊 Admin Dashboard showing user stats, room availability, and coupon management
6. 🔍 Apartment search based on rent range with pagination (6 per page)
7. 📱 Fully responsive UI for mobile, tablet, and desktop
8. 📁 Secure API keys and credentials via environment variables
9. 🧾 My Profile section for all roles showing relevant data dynamically
10. 🎯 Automatic sliding banner, building overview, location map, and elegant UI

---

## 📁 Folder Structure

```bash
building-management/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── App.jsx
│   ├── .env
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── package.json
🛡️ Environment Variables
Client (.env)

VITE_API_URL=https://your-backend-url.com
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain

Server (.env)
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
✅ Deployment Checklist
 Firebase & MongoDB keys hidden via .env

 TanStack Query used for all GET requests

 SweetAlert / Toast used (no browser alerts)

 Role-based protected routes with no reload errors

 Fully responsive UI (Dashboard included)

 20+ Client-side commits, 12+ Server-side commits

 Admin dashboard shows real-time statistics

 Implemented pagination, filtering, and search

📝 Future Improvements
Member auto-eviction for 3 unpaid rents

Payment gateway integration

Advanced analytics dashboard

Framer Motion animations

👨‍💻 Developed By
-Mahabub-alam-