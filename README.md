# 🛒 GreenCart – Full-Stack E-Commerce Platform

![GreenCart Preview](./screenshots/home.png)

**GreenCart** is a full-stack e-commerce web application featuring secure authentication, product management, image uploads, and **Stripe-powered payments**. The project demonstrates real-world MERN architecture with a clean UI and scalable backend.

🌐 **Live Website:** https://green-cart-kohl-zeta.vercel.app
📦 **Repository:** https://github.com/ujjawalsingh30/green-cart

---

## ✨ Features

### 👤 User Features
- User Registration & Login
- JWT Authentication with Cookies
- Browse Products
- Add / Remove Items from Cart
- Secure Checkout with Stripe
- Responsive UI with Toast Notifications

### 🛍 Product Management
- Product Listing
- Product Images Upload
- Cloudinary Media Storage
- Stock & Price Handling

### 🔐 Security & Payments
- Password Hashing with bcrypt
- JWT-based Authentication
- Secure Cookie Handling
- Stripe Checkout Integration

> GreenCart is built as a **real-world e-commerce system**, not a UI-only demo.

---

## 🛠 Tech Stack

### 🌐 Frontend

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=ffffff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=ffffff)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=ffffff)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF5722?logo=react&logoColor=ffffff)

---

### 🖥 Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=ffffff)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=ffffff)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=ffffff)
![Mongoose](https://img.shields.io/badge/Mongoose-888888?logo=mongodb&logoColor=ffffff)
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=ffffff)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=ffffff)

---

### 🔌 Utilities & Services

![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=ffffff)
![Multer](https://img.shields.io/badge/Multer-FF6F00?logo=node.js&logoColor=ffffff)
![bcrypt](https://img.shields.io/badge/bcrypt-4285F4?logo=bcrypt&logoColor=ffffff)
![dotenv](https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=ffffff)
![CORS](https://img.shields.io/badge/CORS-FF6347?logo=cors&logoColor=ffffff)

---

## 📁 Project Structure

```
green-cart/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   ├── .env
│   └── server.js
│
├── screenshots/
│   ├── home.png
│   └── checkout.png
│
└── README.md
```

---

## 🧠 How GreenCart Works

### 🔐 Authentication
- Passwords hashed using **bcrypt**
- JWT tokens stored in **HTTP-only cookies**
- Protected routes using middleware

### 🛍 Products
- Product data stored in MongoDB
- Images uploaded using **Multer**
- Media hosted on **Cloudinary**

### 💳 Checkout Flow
1. User adds items to cart  
2. Stripe Checkout session created  
3. Secure payment handled by Stripe  
4. Order processed after payment success  

---

## 📌 Core API Endpoints

| Method | Endpoint | Description |
|------|--------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Add product |
| POST | `/api/stripe/checkout` | Create Stripe session |
| POST | `/api/webhook/stripe` | Stripe webhook |

---

## ⚙️ Environment Variables

Create a `.env` file inside **server/**:

```
##################################
# Server Configuration
##################################
PORT=5000
NODE_ENV=development

##################################
# Database
##################################
MONGO_URI=your_mongodb_connection_string

##################################
# Authentication
##################################
JWT_SECRET=your_jwt_secret

##################################
# Cloudinary
##################################
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

##################################
# Stripe
##################################
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

⚠️ Never commit `.env` files to GitHub.

---

## 🚀 Getting Started

### Backend
```
cd server
npm install
npm run server 
```

### Frontend
```
cd client
npm install
npm run dev
```

---

## 📈 Future Improvements

- Admin Dashboard
- Order History
- Inventory Management
- Refund Handling
- Role-based Access (Admin / User)

---

## 🏁 Conclusion

**GreenCart** is a production-style e-commerce application showcasing **authentication, payments, image uploads, and secure APIs** using the MERN stack.

![GreenCart Checkout](./screenshots/checkout.png)
