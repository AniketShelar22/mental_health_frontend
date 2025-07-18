# 🧠 Mental Health Check-in App (Frontend)

## 📍 Project Overview

This is the **Frontend** of the Mental Health Check-in web application, built using **React**. Users can:

* Register / Log in
* Submit daily mental health check-ins (mood, stress, and feelings)
* View dashboard and navigate easily

---

## 🚀 Live URL

Frontend hosted on **Netlify**: [https://mentalhealthfrontend.netlify.app](https://mentalhealthfrontend.netlify.app)

---

## 📁 Folder Structure

```
mental-health-frontend/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── CheckinForm.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
└── package.json
```

---

## ⚙️ Technologies Used

* **React** (Functional Components + Hooks)
* **Axios** for API communication
* **React Router DOM** for routing
* **CSS3** for styling

---

## 💻 How to Run Locally

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/mental-health-frontend.git
   cd mental-health-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:** Create a `.env` file:

   ```env
   VITE_API_BASE_URL=https://mental-health-backend-rx5y.onrender.com/api
   ```

4. **Start the frontend:**

   ```bash
   npm run dev
   ```

---

## 📱 Mobile & Accessibility

* Fully responsive across devices
* Simple UI for users with low digital literacy

---

## 🔐 Security Features

* JWT stored securely in localStorage
* All requests attach Authorization headers

---

## ❗ Challenges Faced

* CORS handling between Render backend and Netlify frontend
* Responsive navigation menu with toggle hamburger icon for mobile

---

## 👨‍💻 Author

Developed by Aniket Shelar as part of a full-stack developer assignment.
