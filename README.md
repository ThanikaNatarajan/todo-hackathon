# Todo List - Full Stack Task Manager

A full-stack Todo Task Management Web Application with user authentication, customizable labels, due dates, priority levels, and a calendar view.

---

## Features

- **User Authentication**: Sign in using Google, GitHub, Facebook, or email (via Firebase Auth).
- **Personal Todo Lists**: Each user manages their own tasks (CRUD: Create, Read, Update, Delete).
- **Labels**: Create and manage custom labels (e.g., Home, College, Personal). Assign tasks to labels.
- **Sidebar Navigation**: Labels and calendar are always accessible from the sidebar.
- **Task Attributes**:
  - **Due Date**: Set a due date for each task.
  - **Priority Level**: Mark tasks as "High" (red) or "Low" (green) priority.
- **Calendar View**: View tasks date-wise from the sidebar calendar.
- **Responsive Design**: Clean, modern UI that works on desktop and mobile.
- **Backend API**: Node.js/Express REST API.
- **Database**: MongoDB Atlas (cloud NoSQL database).
- **Frontend**: React (with axios for API calls).
- **Deployment**: Frontend (Vercel), Backend (Render.com), Database (MongoDB Atlas).

---

## Tech Stack

- **Frontend**: React, Axios, CSS (Flexbox)
- **Backend**: Node.js, Express, Mongoose
- **Authentication**: Firebase Authentication
- **Database**: MongoDB Atlas (via Mongoose)
- **Deployment**: Vercel (Frontend), Render.com (Backend)

---

## Getting Started

### 1. **Clone the repository**

```sh
git clone https://github.com/YourUsername/todo-hackathon.git
cd todo-hackathon
```

### 2. **Backend Setup**

```sh
cd backend
npm install
```

- Create a `.env` file in `/backend`:
  ```
  MONGO_URI=your_mongodb_atlas_connection_string
  PORT=5000
  ```
- Start the backend server:
  ```sh
  npm run dev
  # or
  nodemon index.js
  ```

### 3. **Frontend Setup**

```sh
cd ../frontend
npm install
```

- Set up your Firebase project in the [Firebase Console](https://console.firebase.google.com/).
- Enable Authentication providers (Google, GitHub, Facebook, Email, etc.).
- Create a `src/firebase.js` file with your Firebase config.

- Start the frontend:
  ```sh
  npm start
  ```

### 4. **App Structure**

```
todo-hackathon/
  backend/
    models/
    routes/
    controllers/
    index.js
    .env
  frontend/
    src/
      components/
        Sidebar.js
        TaskForm.js
        TaskList.js
        CalendarView.js
      App.js
      App.css
      firebase.js
```

---

## Usage

1. **Sign in** using your preferred method (Google, GitHub, Facebook, etc.).
2. **Create labels** in the sidebar.
3. **Add tasks** with a label, due date, and priority.
4. **View tasks** by label or by date (calendar).
5. **Mark tasks as complete, edit, or delete** as needed.

---

## Deployment

- **Frontend**: Deploy `/frontend` to [Vercel](https://vercel.com/).
- **Backend**: Deploy `/backend` to [Render.com](https://render.com/).
- **Database**: MongoDB Atlas (cloud-hosted, no deployment needed).

---

## Customization

- Update `App.css` for your preferred theme/style.
- To use Auth0 instead of Firebase, see the `auth0-setup.md` (if available).
- You can extend the app with notifications, recurring tasks, etc.

---


## Acknowledgments

- [Firebase](https://firebase.google.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [React](https://reactjs.org/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)

---
