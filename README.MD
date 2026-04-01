
---

# Express Cezar & Bcrypt Hashing App

A simple Node.js web application that allows users to hash passwords using either **bcrypt** or a **Cezar (Caesar) cipher** algorithm. Built with **Express** and **EJS**, following the **MVC (Model–View–Controller)** architecture.

## 🚀 Features

* Hash passwords using secure **bcrypt** hashing
* Hash passwords using a simple **Cezar cipher**
* Store hashed results in a local JSON database
* Display all hashed passwords in the UI
* Request validation using **Joi**
* Real-time UI updates and notifications
* Clean and scalable **MVC architecture**

---

## 🏗️ Architecture (MVC)

This project follows the **MVC pattern**, making the code modular and maintainable.

### 🔹 Model (Service Layer)

* Handles business logic and data operations
* Works with the JSON database

Example:

* `HashService`
* `RootService`

---

### 🔹 View

* Built with **EJS templates**
* Displays hashes and handles UI

Example:

* `views/index.ejs`

---

### 🔹 Controller

* Handles HTTP requests and responses
* Connects frontend with services

Example:

* `HashController`

---

### 🔹 Middleware (Extra Layer)

* Validates incoming requests
* Keeps controllers clean

Example:

* `hashMiddleware` (Joi validation)

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **EJS**
* **bcryptjs**
* **Joi**
* **Nodemon**

---

## 📦 Installation

1. Clone the repository:

```bash id="z3pg6r"
git clone https://github.com/Avo444/express_cezar_bcrypt_hashing.git
cd express_cezar_bcrypt_hashing
```

2. Install dependencies:

```bash id="gflqdr"
npm install
```

3. Run the app:

```bash id="81y21v"
npm run dev
```

4. Open in browser:

```id="gs43d2"
http://localhost:3000
```

---

## 📋 Usage

1. Enter a password
2. Select hashing type (**bcrypt** or **cezar**)
3. Click **Save**
4. View the result instantly in the list

---

## 🔗 API Endpoints

### POST `/hash`

#### Request body:

```json id="s34c1u"
{
  "password": "yourPassword",
  "hash": "bcrypt"
}
```

#### Response:

```json id="x2lj3g"
{
  "password": "yourPassword",
  "hash": "bcrypt",
  "hashedPassword": "..."
}
```

---

### GET `/`

Renders the main page and displays all stored hashes.

---

## 💡 How It Works

1. Frontend sends POST request → `/hash`
2. `hashMiddleware` validates request using **Joi**
3. Controller receives validated data (`res.locals.body`)
4. Service hashes password and updates database
5. Response is sent back and UI updates dynamically

---

## 📁 Project Structure

```id="2lq2px"
.
├─ bin/www
├─ routes/
│   └─ index.js
├─ controllers/
│   └─ HashController.js
├─ services/
│   ├─ HashService.js
│   └─ RootService.js
├─ middleware/
│   └─ hashMiddleware.js
├─ helper/
│   ├─ hashing.js
│   ├─ readFile.js
│   ├─ updateFile.js
│   ├─ createPath.js
│   └─ sendResponse.js
├─ views/
├─ public/
├─ db/hash.json
├─ app.js
└─ package.json
```

---

## ⚠️ Important Notes

* Uses a local JSON file instead of a real database
* Stores original passwords (⚠️ not secure for production)
* Built for learning purposes

---

## ✨ Author

Avo
