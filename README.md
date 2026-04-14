# 🔐 Auth Boilerplate

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-003A70?style=for-the-badge&logo=letsencrypt&logoColor=white)

> Production-ready authentication boilerplate — Register, Login, JWT, Refresh Tokens, RBAC — everything included. Just clone and start building.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📝 Register & Login | Email + Password authentication |
| 🔑 JWT Tokens | Access Token (15min) + Refresh Token (7days) |
| 🍪 HTTP-only Cookies | Refresh token securely stored |
| 🛡️ RBAC | Role-Based Access — `user` `moderator` `admin` |
| 🔒 Protected Routes | Middleware-based route protection |
| 🔐 bcrypt Hashing | Passwords never stored in plain text |
| 📦 Clean Structure | Scalable folder structure |

---

## 🗂️ Project Structure

```
auth-boilerplate/
├── 📄 server.js                 # Entry point
├── 📄 .env.example              # Environment variables template
└── 📁 src/
    ├── 📄 app.js                # Express setup
    ├── 📁 config/
    │   ├── env.js               # Variables validation
    │   └── db.js                # MongoDB connection
    ├── 📁 models/
    │   └── User.js              # User schema + bcrypt hooks
    ├── 📁 middleware/
    │   ├── auth.js              # JWT verification
    │   └── rbac.js              # Role checking
    ├── 📁 routes/
    │   └── auth.routes.js       # All auth routes
    ├── 📁 controllers/
    │   └── auth.controller.js   # Business logic
    └── 📁 utils/
        ├── generateToken.js     # JWT generator
        └── sendResponse.js      # Response formatter
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/anassyed19c1-collab/auth-boilerplate.git
cd auth-boilerplate
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

```bash
cp .env.example .env
```

Fill in your `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-boilerplate
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
NODE_ENV=development
```

### 4️⃣ Run the server

```bash
npm run dev
```

> ✅ Server running at: `http://localhost:5000`

---

## 📡 API Endpoints

Base URL: `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/register` | Register a new user | ❌ |
| `POST` | `/login` | Login user | ❌ |
| `POST` | `/logout` | Logout user | ❌ |
| `POST` | `/refresh-token` | Get new access token | ❌ |
| `GET` | `/profile` | View profile | ✅ |
| `GET` | `/admin` | Admin area | ✅ Admin only |

---

## 🔄 Auth Flow

```
Register / Login
      ↓
Access Token (15 min) ──► Send in Authorization header
Refresh Token (7 days) ──► Stored in HTTP-only cookie

Access Token expired?
      ↓
POST /refresh-token ──► New token (no re-login needed) ✅
```

---

## 🛡️ Protected Routes — How to Use

```js
import verifyToken from './src/middleware/auth.js';
import authorizeRoles from './src/middleware/rbac.js';

// ✅ Any logged in user
router.get('/dashboard', verifyToken, dashboardController);

// ✅ Only admin
router.delete('/user/:id', verifyToken, authorizeRoles('admin'), deleteUserController);

// ✅ Admin or moderator
router.put('/post/:id', verifyToken, authorizeRoles('admin', 'moderator'), updatePostController);
```

---

## 👥 User Roles

```
admin ──────► Full access — everything
moderator ──► Elevated access
user ────────► Basic access — own data only
```

Default role on register: `user`

---

## 🔐 Security Features

- 🔒 Passwords **never** stored in plain text — bcrypt hashed
- 🍪 Refresh token in **HTTP-only cookie** — XSS safe
- ⏱️ Access token **15 min expiry** — leak damage minimal
- 🚫 Logout **invalidates** refresh token in DB
- 🛡️ **CORS** configured — only allowed origins

---

## ⚙️ Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB URI | `mongodb://localhost:27017/auth` |
| `ACCESS_TOKEN_SECRET` | Access token secret | `random_strong_string` |
| `REFRESH_TOKEN_SECRET` | Refresh token secret | `another_strong_string` |
| `ACCESS_TOKEN_EXPIRY` | Access token expiry | `15m` |
| `REFRESH_TOKEN_EXPIRY` | Refresh token expiry | `7d` |
| `NODE_ENV` | Environment | `development` / `production` |

---

## 📦 Dependencies

```json
{
  "express": "Web framework",
  "mongoose": "MongoDB ODM",
  "bcryptjs": "Password hashing",
  "jsonwebtoken": "JWT tokens",
  "dotenv": "Environment variables",
  "cookie-parser": "Cookie handling",
  "cors": "Cross-origin requests"
}
```

---

<div align="center">
  <p>Made with ❤️ — Clone it, use it, build on it!</p>
</div>