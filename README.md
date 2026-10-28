# 🏡 Wanderlust

Wanderlust is a full-stack web application inspired by modern travel and vacation-rental platforms. It allows users to explore property listings, create and manage their own listings, upload images, leave reviews, and view listing locations on an interactive map.

The project is built using **Node.js, Express.js, MongoDB, EJS, Cloudinary, and Mapbox**.

## 🚀 Live Demo

🔗 **Live Website:** https://wanderlust-1-4irn.onrender.com

## 📌 Features

- 🔐 User registration and login
- 👤 User authentication using Passport.js
- 🏠 Create new property listings
- ✏️ Edit and delete your own listings
- 🖼️ Upload listing images using Cloudinary
- 🌍 Interactive Mapbox map for listing locations
- ⭐ Add and delete reviews
- 💰 Display listing prices
- 📱 Responsive user interface
- 🔔 Flash messages for user actions
- ☁️ MongoDB Atlas database
- 🚀 Deployed on Render

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- EJS
- Bootstrap

### Backend
- Node.js
- Express.js
- Mongoose
- Passport.js
- Express Session

### Database
- MongoDB
- MongoDB Atlas

### Cloud Services
- Cloudinary — Image Storage
- Mapbox — Maps and Geolocation
- Render — Deployment

## 📂 Project Structure

```text
Wanderlust/
│
├── Models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   └── users/
│
├── public/
│   ├── css/
│   └── js/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── utils/
│   ├── expressError.js
│   └── wrapAsync.js
│
├── app.js
├── schema.js
├── cloudConfig.js
├── package.json
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Abhishek-Singh166/Wanderlust.git
```

### 2. Move into the project directory

```bash
cd Wanderlust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add the required environment variables:

```env
ATLASDB_URL=your_mongodb_atlas_url

MAP_TOKEN=your_mapbox_token

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

SESSION_SECRET=your_session_secret
```

⚠️ **Never upload your `.env` file or secret keys to GitHub.**

### 5. Start the application

```bash
npm start
```

Or during development:

```bash
nodemon app.js
```

The application will run on:

```text
http://localhost:8080
```

## 🗄️ Database

Wanderlust uses **MongoDB Atlas** to store:

- User information
- Property listings
- Reviews
- Listing locations
- Image information

Mongoose is used to define schemas and interact with MongoDB.

## ☁️ Image Upload

Listing images are uploaded and stored using **Cloudinary**.

When a user creates or updates a listing, the uploaded image is sent to Cloudinary and the resulting image URL is stored in MongoDB.

## 🗺️ Map Integration

The application uses **Mapbox** to display the location of each listing.

Each listing contains geographical coordinates in the format:

```text
[longitude, latitude]
```

These coordinates are used to display the listing marker on the interactive map.

## 🔐 Authentication

User authentication is implemented using:

- Passport.js
- Passport Local Strategy
- Express Session
- MongoDB session storage

Users can:

- Register
- Login
- Logout
- Create listings
- Edit their own listings
- Delete their own listings
- Add reviews

## ⭐ Reviews

Authenticated users can leave reviews on listings.

Each review contains:

- Rating
- Comment
- Author

Users can delete their own reviews.

## 🧑‍💻 Author

**Abhishek Singh**

BTech Computer Science & Engineering  
SRM Institute of Science and Technology

## 📄 License

This project is created for educational and project-development purposes.
