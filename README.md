# User Management System  

A simple user management system built with **Express.js** and **MongoDB**.  
This project demonstrates basic **CRUD (Create, Read, Update, Delete)** operations where users can be created, listed, updated, and managed through a persistent MongoDB database.  

---

## 🚀 Features  
- Add new users via form input  
- View all users in a list format  
- Update user details anytime  
- Delete users from the database  
- Persistent storage with MongoDB  
- RESTful API structure for scalability  

---

## 🛠️ Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Frontend (if applicable):** EJS / React (mention whichever you used)  
- **Tools:** Nodemon, dotenv  

---

## 📂 Project Structure  
```bash
.
├── src/
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes
│   ├── controllers/   # Logic for CRUD operations
│   └── app.js         # Main server file
├── .env               # Environment variables (DB URI, PORT)
├── package.json
└── README.md
