
---

# Express Cezar & Bcrypt Hashing App

A simple Node.js web application that lets users hash passwords using either **bcrypt** or a **Cezar (Caesar) cipher** algorithm. Built with **Express** and **EJS**.

## 🚀 Features

* Hash passwords using modern **bcrypt** hashing.
* Hash passwords with a simple **Cezar cipher** shift.
* Store and display all hashed passwords.
* Responsive UI with real‑time notifications.
* JSON storage using a local `db/hash.json` file.

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **EJS** view templates
* **bcryptjs** for secure password hashing
* **Joi** for request validation
* **Nodemon** for development auto‑reload

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Avo444/express_cezar_bcrypt_hashing.git
   cd express_cezar_bcrypt_hashing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Visit in browser:

   ```
   http://localhost:3000
   ```

## 📋 Usage

1. Enter a password in the **Create** section.
2. Select a hash type—**bcrypt** or **Cezar Algorithm**.
3. Click **Save**.
4. View your hashed password in the **Hashes List**.
5. Notifications confirm when a new hash is added.

## 🔗 API Endpoints

### POST `/api/hash`

Request body:

```json
{
  "password": "yourPassword",
  "hash": "bcrypt"
}
```

Response:

```json
{
  "password": "yourPassword",
  "hash": "bcrypt",
  "hashedPassword": "..."
}
```

### GET `/`

Renders the main page and shows all stored hashes.

## 💡 How It Works (Overview)

* The server is created in `bin/www` and runs on port **3000** by default.
* Middlewares:

  * **dbMiddleware** loads the JSON database.
  * **hashMiddleware** validates request bodies with **Joi**.
* Password hashing logic supports:

  * **bcrypt** (secure hashing)
  * **Cezar cipher** (character shift)
* UI allows users to submit passwords and view all past hashes.

## 📁 Project Structure

```
.
├─ bin/www
├─ routes/
│   ├─ index.js
│   └─ hash.js
├─ middleware/
│   ├─ dbMiddleware.js
│   └─ hashMiddleware.js
├─ helper/
│   ├─ createPath.js
│   ├─ hashing.js
│   ├─ readFile.js
│   ├─ updateFile.js
│   └─ sendResponse.js
├─ views/
├─ public/ (CSS/JS)
├─ db/hash.json
├─ app.js
└─ package.json
```

## 📜 License

This project is open source and can be used under the MIT License.

---

## ✨ Author

Avo
