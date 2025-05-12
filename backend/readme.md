# 📅 Event Registration Backend (Node.js + PostgreSQL + Nodemailer)

This is the backend API for a modern event registration application. It handles event participant submissions, stores data in a PostgreSQL database, and sends confirmation emails using Gmail via Nodemailer.

---

## 🚀 Features

- RESTful API built with **Express.js**
- Data persistence with **PostgreSQL**
- **Nodemailer** integration for email confirmation
- Environment variable support via **dotenv**
- Fully CORS-enabled for frontend integration
- Secure and production-ready with SSL PostgreSQL connection

---

## 📦 Tech Stack

- **Node.js** (Express)
- **PostgreSQL** via `pg` module
- **Nodemailer** (Gmail SMTP)
- **dotenv**
- **CORS**

---

### 1. 📦 Install Dependencies

```bash
npm install

```

----------

### 2. 🗄️ Set Up PostgreSQL Database

Create a table in your PostgreSQL database:

```sql
CREATE TABLE registrations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  message TEXT,
  age INTEGER,
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

----------

### 3.  Setup `.env` File

Create a `.env` file in the `backend/` directory:

```bash
touch .env

```

Add the following variables:

```env
PORT=5000
DB_URL=your_postgresql_connection_string
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_app_password

```

----------

### 📧 How to Get Gmail App Password?

> If you use 2-Step Verification, you can't use your normal Gmail password for apps like Nodemailer. Instead, create an **App Password**.

#### Steps:

1.  Go to [Google Account Security](https://myaccount.google.com/security)
    
2.  Enable **2-Step Verification** (if not already enabled)
    
3.  Go to **App passwords**
    
4.  Select:
    
    -   App: `Mail`
        
    -   Device: `Other` → name it `EventApp`
        
5.  Google will generate a 16-digit password.
    
6.  Use that password as your `EMAIL_PASS` in `.env`
    

> ⚠️ **Never share this password or upload it to GitHub!**

----------

### 5. 🚀 Run the Server

```bash
npm start

```

The server should now be running on:

```
http://localhost:5000

```

----------

## 📡 API Endpoint

### POST `/api/events/register`

#### Request Body:

```json
{
  "name": "Mahmud",
  "email": "dev@devplus.fun",
  "phone": "+880 1998470273",
  "message": "Looking forward to the event!",
  "age": 20,
  "address": "Bogura Sadar 5800, Rajshahi"
}

```

#### Response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Mahmud",
    ...
  }
}

```

----------

## How to Modify

-   To change the database table: edit `db/index.js` and SQL in `controllers/eventController.js`
    
-   To customize email content: edit `mailer/index.js`
    
-   To add more routes: extend `routes/eventRoutes.js` and `controllers/eventController.js`
    

----------

## 🔒 Security Tips

-   Use `.env` for sensitive configs.
    
-   Never push `.env` to GitHub.
    
-   Use HTTPS and trusted SMTP only in production.
    
-   Validate and sanitize user input before DB insert (use `express-validator` or similar).
    