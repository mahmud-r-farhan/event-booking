# 🎉 Event Registration App

A modern, full-stack Event Registration Application designed for seamless user registration, email notifications, and data management. Built with a robust tech stack, this app is responsive, scalable, and ready for deployment.

## ✨ Features

-   📋 **User-Friendly Registration Form**: Built with Angular Material for a sleek, modern UI.
    
-   📤 **Backend API Integration**: Securely sends form data to a Node.js/Express backend.
    
-   📬 **Email Notifications**: Sends confirmation emails via Gmail using Nodemailer.
    
-   🗄️ **PostgreSQL Database**: Stores registration data reliably with Neon.tech or local PostgreSQL.
    
-   ✅ **Real-Time Feedback**: Displays toast messages for form submission success or errors.
    
-   📱 **Responsive Design**: Optimized for mobile and desktop devices.
    
-   🌐 **Deployment-Ready**: Configured for easy deployment on popular platforms, including Docker and AWS.
    
-   🧩 **Modular Architecture**: Standalone Angular components for easy customization.
    

----------

## 📦 Tech Stack

| Layer        | Technologies                    |
| ------------ | ------------------------------- |
| **Frontend** | Angular, Angular Material       |
| **Backend**  | Node.js, Express.js             |
| **Database** | PostgreSQL (Neon.tech or local) |
| **Email**    | Nodemailer (Gmail SMTP)         |


----------

## 📁 Project Structure

```
event-booking/
├── backend/
│   ├── controllers/       # API logic
│   ├── routes/            # Express routes
│   ├── mailer.js          # Email configuration
│   ├── db.js              # Database connection
│   ├── .env               # Environment variables
│   ├── server.js          # Backend entry point
│   ├── Dockerfile         # Docker configuration for backend
├── frontend/
│   ├── src/
│   │   ├── app/           # Angular components
│   │   ├── assets/        # Static assets
│   │   ├── styles.css     # Global styles
│   ├── index.html         # Frontend entry point
│   ├── Dockerfile         # Docker configuration for frontend
├── docker-compose.yml     # Docker Compose for local development
└── README.md              # Project documentation

```

----------

## 🚀 Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

-   **Node.js** (v16 or higher)
    
-   **Angular CLI** (`npm install -g @angular/cli`)
    
-   **PostgreSQL** (local or Neon.tech account)
    
-   **Gmail Account** (for email notifications)
    
-   **Docker** (for containerized deployment)
    
-   **AWS CLI** (for AWS deployment)
    

----------

### 1. Clone the Repository

```bash
git clone https://github.com/mahmud-r-farhan/event-booking.git
cd event-booking

```

----------

### ⚙️ Backend Setup (Local)

#### 2. Install Backend Dependencies

```bash
cd backend
npm install

```

#### 3. Configure Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```
PORT=5000
DB_URL=your_postgres_connection_string
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password

```

> **Note**: Replace `DB_URL` with your PostgreSQL connection string (e.g., from Neon.tech or local PostgreSQL). Use a **Gmail App Password** for `EMAIL_PASS` (see below for instructions).

#### 4. Start the Backend Server

```bash
node server.js

```

The backend will run at `http://localhost:5000`.

----------

### 🖥️ Frontend Setup (Local)

#### 5. Install Frontend Dependencies

```bash
cd frontend
npm install

```

#### 6. Run the Angular App

```bash
ng serve

```

The frontend will run at `http://localhost:4200`.

> **Important**: Ensure the backend server is running to enable form submissions.

----------

### 📧 Setting Up Gmail App Password

To use Nodemailer with Gmail, you need an **App Password**:

1.  Go to [Google Account Security](https://myaccount.google.com/security).
    
2.  Enable **2-Step Verification** (if not already enabled).
    
3.  Navigate to **App Passwords**.
    
4.  Select **Mail** as the app and generate a password.
    
5.  Copy the generated password and use it as `EMAIL_PASS` in the `.env` file.
    

**⚠️ Do not use your regular Gmail password.**

----------

## 🐳 Deploying with Docker

### 1. Create Dockerfiles

#### Backend Dockerfile (`backend/Dockerfile`)

```dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]

```

#### Frontend Dockerfile (`frontend/Dockerfile`)

```dockerfile
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

```

### 2. Create Docker Compose File (`docker-compose.yml`)

```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    env_file:
      - ./backend/.env
    depends_on:
      - db
  frontend:
    build: ./frontend
    ports:
      - "4200:80"
  db:
    image: postgres:13
    environment:
      POSTGRES_USER: your_db_user
      POSTGRES_PASSWORD: your_db_password
      POSTGRES_DB: event_booking
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:

```

> **Note**: Update `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` in `docker-compose.yml` and ensure they match your `DB_URL` in the backend `.env`.

### 3. Build and Run with Docker Compose

```bash
docker-compose up --build

```

-   Backend: `http://localhost:5000`
    
-   Frontend: `http://localhost:4200`
    
-   Database: Managed by the PostgreSQL container
    

### 4. Push Docker Images to AWS ECR (Optional)

#### Create ECR Repositories

```bash
aws ecr create-repository --repository-name event-booking-backend
aws ecr create-repository --repository-name event-booking-frontend

```

#### Authenticate Docker with ECR

```bash
aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account-id.dkr.ecr.your-region.amazonaws.com

```

#### Build, Tag, and Push Docker Images

```bash
# Backend
docker build -t event-booking-backend ./backend
docker tag event-booking-backend:latest your-account-id.dkr.ecr.your-region.amazonaws.com/event-booking-backend:latest
docker push your-account-id.dkr.ecr.your-region.amazonaws.com/event-booking-backend:latest

# Frontend
docker build -t event-booking-frontend ./frontend
docker tag event-booking-frontend:latest your-account-id.dkr.ecr.your-region.amazonaws.com/event-booking-frontend:latest
docker push your-account-id.dkr.ecr.your-region.amazonaws.com/event-booking-frontend:latest

```

----------

## ☁️ Deploying on AWS

### 1. Set Up an RDS PostgreSQL Database (Optional)

If not using Neon.tech:

-   Create a PostgreSQL RDS instance in the AWS Console.
    
-   Note the endpoint and credentials, and update `DB_URL` in your `.env`.
    

### 2. Create an ECS Cluster

-   Go to the **AWS ECS Console** and create a new cluster (e.g., `event-booking-cluster`).
    
-   Choose **Fargate** for serverless deployment.
    

### 3. Define Task Definitions for Backend and Frontend

(See the original documentation for the exact JSON definitions.)

### 4. Create Services in ECS

-   Use the **backend** and **frontend** task definitions.
    
-   Set up **load balancers (ALB)** to route traffic to appropriate ports.
    

### 5. Update the Frontend API URL

Update the frontend’s API URL in `frontend/src/app/app.component.ts` to point to the backend’s ALB DNS name.

### 6. Deploy and Test

-   Deploy the services in the ECS Console.
    
-   Access the frontend via the frontend ALB DNS name.
    

----------

## 🌐 Alternative Deployment Platforms

In addition to AWS, you can deploy to:

-   **Backend**: Render, Railway
    
-   **Frontend**: Vercel, Netlify, Firebase Hosting
    

----------

## 🛠️ Customizing the App

Modify the app to suit your needs:

-   **Form Fields**: Edit form and styling in `frontend/src/app/app.component.html` and `frontend/src/styles.css`.
    
-   **API Logic**: Update endpoints in `frontend/src/app/app.component.ts`.
    
-   **Database Schema**: Modify the SQL table in `backend/controllers/registerUser.js`.
    
-   **Email Templates**: Customize email content in `backend/mailer.js`.
    

----------

## Troubleshooting

-   **Form Submission Fails**: Ensure the backend ALB DNS is correctly set in the frontend and security groups allow traffic.
    
-   **Email Not Sending**: Verify `EMAIL_USER` and `EMAIL_PASS` in the ECS task definition and check Gmail’s App Password settings.
    
-   **Database Connection Issues**: Confirm the `DB_URL` is correct and the RDS/Neon.tech database is accessible from the ECS tasks.
    
-   **Docker Build Fails**: Check Dockerfiles for errors and ensure dependencies are installed.
    

----------

## 🤝 Contributing

Contributions are welcome! To contribute:

1.  Fork the repository.
    
2.  Create a new branch (`git checkout -b feature/your-feature`).
    
3.  Commit your changes (`git commit -m "Add your feature"`).
    
4.  Push to the branch (`git push origin feature/your-feature`).
    
5.  Open a Pull Request.
    

----------

## 📜 License

This project is licensed under the MIT License (LICENSE).

----------

##  Author

**Mahmud**  
GitHub: [Mahmud](https://github.com/mahmud-r-farhan)  
Email: dev@devplus.fun

----------

## Acknowledgments

-   Angular for the powerful frontend framework.
    
-   Angular Material for beautiful UI components.
    
-   Node.js and Express.js for the backend.
    
-   Nodemailer for email functionality.
    
-   Neon.tech for managed PostgreSQL.
    
-   Docker for containerization.
    
-   AWS for cloud deployment.
    

----------

## ⭐ Enjoying the project? Give it a star on GitHub!

Feel free to open issues or submit pull requests for improvements.
