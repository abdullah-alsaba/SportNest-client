# SportNest

A full-stack sports facility booking management system built with the MERN stack. SportNest allows users to explore sports facilities, view facility details, book available slots, and manage their bookings through a simple and user-friendly interface.

## 🔗 Live Website

[https://sportnest-teal.vercel.app/](https://sportnest-teal.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Main Pages](#main-pages)
- [Booking System](#booking-system)
- [Authentication & Security](#authentication--security)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Development](#development)
- [Database](#database)
- [Responsive Design](#responsive-design)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

## ✨ Features

- User registration and login
- Google authentication
- Secure authentication with Better Auth and JWT
- Browse all available sports facilities
- Search facilities by name
- Filter facilities by sports type
- View detailed facility information
- Book sports facilities with selected date, time slot, and duration
- Automatically calculate total booking price
- View personal bookings
- Cancel bookings
- Add new sports facilities
- Manage listed facilities
- Responsive design for desktop, tablet, and mobile
- Toast notifications for important actions
- Protected/private routes
- MongoDB database integration

## 🛠️ Technologies Used

### Frontend
- Next.js
- React
- Tailwind CSS
- HeroUI
- Lucide React
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- JWT
- JOSE
- CORS
- dotenv

### Authentication
- Better Auth
- Email & Password Authentication
- Google Authentication
- JWT Authentication

### Deployment
- **Frontend:** Vercel
- **Backend:** Vercel
- **Database:** MongoDB Atlas

## 📄 Main Pages

| Page | Description |
|------|--------------|
| Home | Landing page with an overview of the platform |
| All Facilities | Browse and search all available sports facilities |
| Facility Details | View detailed information about a specific facility |
| Login | User authentication (email/password or Google) |
| Register | New user registration |
| My Bookings | View and manage personal bookings |
| Add Facility | Add a new sports facility |
| Manage Facilities | Manage previously listed facilities |
| 404 Not Found | Custom error page for undefined routes |

## 📅 Booking System

Users can select:

- Facility
- Booking date
- Available time slot
- Booking duration

The total price is calculated automatically based on the facility's hourly price.

```
Total Price = Price Per Hour × Duration
```

## 🔐 Authentication & Security

SportNest uses **Better Auth** for user authentication and **JWT** for securing protected API endpoints.

Protected operations include:

- Viewing facility details
- Viewing personal bookings
- Creating bookings
- Cancelling bookings

The backend verifies the JWT token before allowing access to protected endpoints.

## 🔌 API Endpoints

### Facilities

| Method | Endpoint | Description |
|--------|-----------|--------------|
| GET | `/sports` | Get all facilities |
| GET | `/sports/:facilityId` | Get a single facility by ID |
| POST | `/sports` | Add a new facility |
| PUT | `/sports/:id` | Update an existing facility |
| DELETE | `/sports/:id` | Delete a facility |

### Bookings

| Method | Endpoint | Description |
|--------|-----------|--------------|
| GET | `/bookings/:user_id` | Get all bookings for a specific user |
| POST | `/bookings` | Create a new booking |
| DELETE | `/bookings/:booking_id` | Cancel a booking |

## 📁 Project Structure

```
SportNest
│
├── sportsnest-client
│   ├── src
│   │   ├── app
│   │   ├── components
│   │   ├── lib
│   │   └── ...
│   ├── public
│   └── package.json
│
└── sportsnest-server
    ├── index.js
    ├── .env
    └── package.json
```

## 🔑 Environment Variables

### Client (`sportsnest-client/.env`)

```
NEXT_PUBLIC_API_URI=
NEXT_PUBLIC_APP_URL=
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

### Server (`sportsnest-server/.env`)

```
MONGODB_URI=
PUBLIC_URI=
PORT=
```

> ⚠️ **Never commit `.env` files or secret keys to GitHub.**

## ⚙️ Installation

### 1. Clone the Repositories

```bash
git clone <your-client-repository-url>
git clone <your-server-repository-url>
```

### 2. Install Client Dependencies

```bash
cd sportsnest-client
npm install
```

### 3. Run the Client

```bash
npm run dev
```

### 4. Install Server Dependencies

```bash
cd sportsnest-server
npm install
```

### 5. Run the Server

```bash
npm run dev
```

## 💻 Development

| Service | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8686 |

## 🗄️ Database

SportNest uses **MongoDB Atlas**.

**Main database:** `sportnestDB`

**Collections:**
- `sports`
- `bookings`

## 📱 Responsive Design

The application is designed to work seamlessly across:

- Desktop
- Laptop
- Tablet
- Mobile devices

## 🚀 Future Improvements

- Online payment integration
- Booking availability validation
- Admin dashboard
- Facility ownership authorization
- Booking status management
- Email booking confirmation
- Advanced facility filtering
- Pagination
- Reviews and ratings

## 👤 Author

**Abdullah Al Saba**
MERN Stack Developer

## 📜 License

This project was created for educational and assignment purposes.
