# Auth Boilerplate 🔐

A production-ready authentication boilerplate built with Node.js, Express, MongoDB, and JWT.

---

## Features

- ✅ Register & Login with email/password
- ✅ JWT Access Token + Refresh Token system
- ✅ Secure HTTP-only cookies for refresh tokens
- ✅ Role-Based Access Control (RBAC) — `user`, `moderator`, `admin`
- ✅ Protected routes with middleware
- ✅ Password hashing with bcrypt
- ✅ Centralized error handling & response format

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcryptjs
- **Environment Variables:** dotenv

---

## Project Structure
auth-boilerplate/
├── server.js
├── .env.example
└── src/
├── app.js
├── config/
│   ├── env.js
│   └── db.js
├── models/
│   └── User.js
├── middleware/
│   ├── auth.js
│   └── rbac.js
├── routes/
│   └── auth.routes.js
├── controllers/
│   └── auth.controller.js
└── utils/
├── generateToken.js
└── sendResponse.js

---

## Getting Started

### 1. Clone the repo
\```bash
git clone https://github.com/your-username/auth-boilerplate.git
cd auth-boilerplate
\```

### 2. Install dependencies
\```bash
npm install
\```

### 3. Setup environment variables
\```bash
cp .env.example .env
\```

Fill in your values in `.env`:
\```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-boilerplate
ACCESS_TOKEN_SECRET=your_secret
REFRESH_TOKEN_SECRET=your_other_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
NODE_ENV=development
\```

### 4. Run the server
\```bash
npm run dev
\```

---

## API Endpoints

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/auth/register` | Register | No |
| POST | `/api/auth/login` | Login | No |
| POST | `/api/auth/logout` | Logout | No |
| POST | `/api/auth/refresh-token` | New access token | No |
| GET | `/api/auth/profile` | Profile | Yes |
| GET | `/api/auth/admin` | Admin only | Yes (admin) |

---

## Using Protected Routes

\```js
import verifyToken from './src/middleware/auth.js';
import authorizeRoles from './src/middleware/rbac.js';

// Any logged in user
router.get('/dashboard', verifyToken, dashboardController);

// Only admin
router.delete('/user/:id', verifyToken, authorizeRoles('admin'), deleteUserController);

// Admin or moderator
router.put('/post/:id', verifyToken, authorizeRoles('admin', 'moderator'), updatePostController);
\```

---

## User Roles

| Role | Access |
|------|--------|
| `user` | Basic access |
| `moderator` | Elevated access |
| `admin` | Full access |