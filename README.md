# LinkNest

A modern link management platform built with React, Express, and Supabase.

## Tech Stack

- **Frontend:** Vite + React + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** Supabase (PostgreSQL)

## Project Structure

```
linknest/
├── client/              # Frontend (Vite + React + Tailwind CSS)
│   └── src/
│       ├── assets/      # Static assets (images, fonts)
│       ├── components/  # Reusable UI components
│       ├── pages/       # Page-level components
│       ├── layouts/     # Layout wrappers
│       ├── hooks/       # Custom React hooks
│       ├── services/    # API service calls
│       ├── utils/       # Utility functions
│       ├── styles/      # Global styles
│       ├── context/     # React context providers
│       └── routes/      # Route definitions
├── backend/             # Backend (Node.js + Express)
│   ├── config/          # Configuration (Supabase, etc.)
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Express middleware
│   ├── models/          # Supabase data models
│   ├── routes/          # API route definitions
│   ├── services/        # Business logic services
│   ├── utils/           # Utility functions
│   └── uploads/         # File uploads directory
└── .env                 # Environment variables
```

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your Supabase credentials
3. Install dependencies: `npm install`
4. Start development: `npm run dev`

## Environment Variables

- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anonymous key
