# Blood Donation Website

One-page Blood Donation website with real authentication.

- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Backend:** Node.js + Express + MongoDB (Mongoose) + JWT auth (bcrypt password hashing)

## Structure

```
blood-donation-website/
├── backend/     -> Express API (register, login, protected /me route)
└── frontend/    -> Next.js site (Home, Login, Register, Dashboard)
```

## 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# edit .env -> set MONGO_URI (local MongoDB or MongoDB Atlas) and JWT_SECRET
npm run dev
```

Backend runs at `http://localhost:5000`.

Endpoints:
- `POST /api/auth/register` — { name, email, phone, bloodGroup, password }
- `POST /api/auth/login` — { email, password }
- `GET /api/auth/me` — requires `Authorization: Bearer <token>` header

## 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Frontend runs at `http://localhost:3000`.

## Flow

1. Home page: navbar + "This is a Blood Donation Website" hero, contact number/email, **Learn More** (goes to Register) and **Login** buttons.
2. `/register` — creates a real user in MongoDB (password hashed with bcrypt), returns JWT.
3. `/login` — verifies credentials against MongoDB, returns JWT.
4. Token is stored in `localStorage` and sent as `Authorization: Bearer <token>` to `/api/auth/me`.
5. `/dashboard` — protected page, shows logged-in user's info; redirects to `/login` if no valid token.

## Notes / Next steps you may want

- Add MongoDB Atlas connection string in production instead of local Mongo.
- Add password reset / email verification if needed.
- Move JWT from `localStorage` to an httpOnly cookie for stronger security in production.
