# 🎉 Event Registration App

A full-stack event registration application built with:

-   🧩 **Frontend**: Angular + Angular Material
    
-   ⚙️ **Backend**: Node.js, Express.js, PostgreSQL
    
-   📧 **Email Notifications**: Nodemailer + Gmail
    
-   🌐 **Deployment Ready**, Responsive, and SEO-friendly base
    

----------

## ✨ Features

-   📋 Modern Angular Material registration form
    
-   📤 Sends form data to backend API
    
-   📬 Confirmation email sent via Gmail using Nodemailer
    
-   🗄️ PostgreSQL database to store registrations
    
-   ✅ Toast feedback messages on form submission
    
-   💻 Mobile responsive and standalone Angular component setup
    

----------

## 📦 Tech Stack


| Frontend | Angular, Angular Material |
|--|--|
| Backend | Node.js, Express.js |
|Database|PostgreSQL (via Neon.tech or local) |
|Email| Nodemailer (Gmail SMTP) |

----------

## 📁 Project Structure

```
event-booking/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── mailer.js
│	├── .env
│   ├── db.js
│   ├── server.js
├── frontend/
│   ├── app/
│   ├── index.html
│   └── styles.css
└── README.md

```

----------

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/mahmud-r-farhan/event-booking.git
cd event-booking

```

----------

## ⚙️ Backend Setup

### 2. Install Dependencies

```bash
cd backend
npm install

```

### 3. Setup Environment Variables

Create a `.env` file in the `backend/` directory:

```
PORT=5000
DB_URL=your_postgres_connection_string
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_app_password

```

> 💡 See the Gmail password section below if unsure how to set up `EMAIL_PASS`.

### 4. Start Backend Server

```bash
node server.js

```

Server runs at: `http://localhost:5000`

----------

## 🖥️ Frontend Setup (Angular)

### 1. Move to Frontend Folder

```bash
cd ../frontend

```

### 2. Install Angular Dependencies

```bash
npm install

```

### 3. Run Angular App

```bash
ng serve

```

Frontend runs at: `http://localhost:4200`

Make sure the backend is running for the form to submit correctly.

----------

## 📧 How to Generate Gmail App Password

1.  Go to your [Google Account Security](https://myaccount.google.com/security)
    
2.  Enable **2-Step Verification**
    
3.  Go to **App Passwords**
    
4.  Generate a new password for **"Mail"** app
    
5.  Copy and use this as `EMAIL_PASS` in `.env`
    

🔐 **Do not use your actual Gmail password.**

----------

## 🌐 Deployment Tips

-   🛠️ Use [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://heroku.com/) for backend deployment.
    
-   🌍 Use [Vercel](https://vercel.com/), [Firebase Hosting](https://firebase.google.com/), or [Netlify](https://netlify.com/) for Angular frontend.
    

----------

## 🔄 Modifying the App

-   To update form fields: edit `frontend/app/app.component.html`
    
-   To change API: update `app.component.ts`
    
-   To add DB fields: modify SQL table and `backend/controllers/registerUser.js`
    
-   To change email: update `backend/mailer/index.js`
    

----------

## 🧪 Testing

### Backend:

```bash
npm test  # You can integrate Jest or Mocha here

```

### Frontend:

```bash
ng test

```

----------

## Author

**Mahmud**  
[GitHub](https://github.com/mahmud-r-farhan)

