# 🔐 Next Auth Client

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

> Production-ready Next.js authentication frontend — Login, Register, Dashboard, Admin Panel — everything included. Just clone and start building.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📝 Login & Register | Email + Password authentication |
| 🔑 JWT Tokens | Access Token stored securely |
| 🍪 HTTP-only Cookies | Refresh token securely stored |
| 🛡️ Route Protection | proxy.js protects all private routes |
| 👥 Role-Based UI | Admin panel only visible to admins |
| 🎨 shadcn/ui | Beautiful UI components out of the box |
| 📦 Clean Structure | Scalable folder structure |

---

## 🗂️ Project Structure

```
next-auth-client/
├── 📄 .env.example              # Environment variables template
└── 📁 src/
    ├── 📁 app/
    │   ├── (auth)/
    │   │   ├── login/           # Login page
    │   │   └── register/        # Register page
    │   ├── dashboard/           # Protected dashboard
    │   ├── admin/               # Admin only page
    │   └── page.js              # Redirects to login
    ├── 📁 lib/
    │   ├── api.js               # Axios instance
    │   └── auth.js              # Token management
    └── 📄 proxy.js              # Route protection
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/anassyed19c1-collab/Next-Auth-Client.git
cd Next-Auth-Client
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

```bash
# Windows
copy .env.example .env.local

# Mac/Linux
cp .env.example .env.local
```

Fill in your `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4️⃣ Run the server

```bash
npm run dev
```

> ✅ Server running at: `http://localhost:3000`

---

## 📡 Available Pages

Base URL: `/`

| Route | Description | Protected |
|-------|-------------|-----------|
| `/login` | Login page | ❌ |
| `/register` | Register page | ❌ |
| `/dashboard` | User dashboard | ✅ |
| `/admin` | Admin panel | ✅ Admin only |

---

## 🔄 Auth Flow

```
Login / Register
      ↓
Access Token ──► Stored in localStorage + cookie
Refresh Token ──► Stored in HTTP-only cookie

Access Token expire?
      ↓
POST /refresh-token ──► New token (no re-login needed) ✅
```

---

## 🛡️ Route Protection

```
/dashboard → Requires login
/admin     → Requires admin role
/login     → Redirects to dashboard if already logged in
/register  → Redirects to dashboard if already logged in
```

---

## 👥 User Roles

```
admin ──────► Full access — admin panel visible
moderator ──► Elevated access
user ────────► Basic access (default on register)
```

Default role on register: `user`

---

## 🔐 Security Features

- 🔒 Access token stored in **HTTP-only cookie** — XSS safe
- 🛡️ Route protection via **proxy.js**
- 👥 **Role-based** UI rendering
- 🚫 Unauthorized users **redirected** automatically
- ⚡ Built on **Next.js 16** with App Router

---

## ⚙️ Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:5000` |

---

## 📦 Dependencies

```json
{
  "next": "Latest Next.js",
  "react": "React 19",
  "axios": "HTTP requests",
  "js-cookie": "Cookie management",
  "tailwindcss": "Styling",
  "shadcn/ui": "UI components"
}
```

---

## 🔗 Related

| | Description |
|-|-------------|
| **CLI Tool** | `npx create-next-auth-app-cli my-project` |
| **Backend** | [auth-boilerplate](https://github.com/anassyed19c1-collab/auth-boilerplate) |
| **Backend CLI** | `npx create-auth-app-cli my-backend` |

---

<div align="center">
  <p>Made with ❤️ — Clone it, use it, build on it!</p>
</div>