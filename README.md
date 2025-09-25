# 📒 A Simple Notes API

## 📖 Description
A simple **Notes API** built with **Node.js** and **Express.js**.  
This project implements basic CRUD operations (Create, Read, Update, Delete) for managing notes stored in memory.

---

## 🚀 Features
- Create a new note with a title and content.  
- Get all notes or a single note by ID.  
- Update an existing note.  
- Delete a note by ID.  
- JSON-based API responses.  
- Error handling for invalid requests.  

---

## 📂 Project Structure
```
project-root/
│── index.js        # Main server file
│── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd notes-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the server
```bash
npm start
```

The server will start on:
```
http://localhost:3000
```

---

## 📡 API Endpoints

### Welcome
**GET /**  
Response: `"Welcome to Notes API 📒"`

---

### Create a Note
**POST /notes**  
Request body:
```json
{ "title": "My first note", "content": "This is the content of my note" }
```
Response:
```json
{ "id": 1, "title": "My first note", "content": "This is the content of my note" }
```

---

### Get All Notes
**GET /notes**  
Response:
```json
[
  { "id": 1, "title": "My first note", "content": "This is the content of my note" }
]
```

---

### Get a Single Note
**GET /notes/:id**  
Example:
```http
GET /notes/1
```
Response:
```json
{ "id": 1, "title": "My first note", "content": "This is the content of my note" }
```

---

### Update a Note
**PUT /notes/:id**  
Request body (fields optional):
```json
{ "content": "Updated content" }
```
Response:
```json
{ "id": 1, "title": "My first note", "content": "Updated content" }
```

---

### Delete a Note
**DELETE /notes/:id**  
Response:
```json
{ "message": "Note deleted" }
```

---

## ✨ Bonus Features (Optional)
- Validation to ensure `title` and `content` are required when creating a note.  
- Add `createdAt` timestamp to each note.  

---
