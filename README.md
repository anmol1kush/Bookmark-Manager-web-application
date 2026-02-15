# 🔖 Bookmark Manager

## 📌 Project Overview
The **Bookmark Manager** is a full-stack web application designed to help users save, manage, and organize website bookmarks through a simple and intuitive interface. 

Built with a modern stack—**React and Tailwind CSS** on the frontend and **Node.js with Express** on the backend—it follows clean REST API principles and supports full CRUD operations. The application also includes advanced features like real-time search, tag-based filtering, and a persistent dark mode.

---

## 🚀 Features

### Frontend Features
* **📄 Bookmark List**: Displays saved bookmarks with clickable titles, URLs, descriptions, and tags.
* **➕ Add Bookmark**: Validated form for URLs, titles, descriptions, and comma-separated tags.
* **✏️ Edit Bookmark**: Inline editing for titles and descriptions with immediate UI updates.
* **❌ Delete Bookmark**: Easily remove bookmarks with a confirmation prompt.
* **🔍 Search**: Real-time filtering by title or URL as you type.
* **🏷️ Filter by Tag**: Clickable tags to filter the list; includes an option to clear active filters.
* **🌙 Dark Mode**: Toggle between light and dark themes (persisted via local storage).
* **🎨 Responsive UI**: Optimized for all screen sizes using Tailwind CSS.

### Backend Features
* **RESTful API**: Built with Express using proper HTTP status codes (200, 201, 204, 400, 404).
* **File-based Persistence**: Data is stored and managed using a `bookmarks.json` file.
* **Validation**: Input validation for required fields and URL formats.
* **Metadata Fetching**: Automatic page title fetching with graceful fallbacks.
* **Security & Stability**: Basic rate limiting and centralized error handling.
* **Testing**: Unit tests for core API endpoints.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React (Vite), Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Storage** | File-based JSON storage |
| **Testing** | Jest, Supertest |

---

## ⚙️ How the Application Works
1.  **Communication**: The frontend sends HTTP requests to the backend API via Axios.
2.  **Logic**: The backend validates data and performs CRUD operations on the `bookmarks.json` file.
3.  **State Management**: The frontend updates its local state based on API responses to re-render the UI efficiently.
4.  **Performance**: Search and tag filtering are handled client-side for near-instant results.
5.  **Theming**: Dark mode is managed using Tailwind’s `dark` variants.

---

## 📡 API Endpoints

### Get All Bookmarks
**`GET /api/bookmarks`**
* **Response Status**: `200 OK`
* **Returns**: An array of all bookmark objects.

### Create a New Bookmark
**`POST /api/bookmarks`**
* **Request Body**:
    ```json
    {
      "url": "[https://react.dev](https://react.dev)",
      "title": "React Docs",
      "description": "Official React documentation",
      "tags": ["react", "frontend"]
    }
    ```
* **Response Status**: `201 Created`

### Update a Bookmark
**`PUT /api/bookmarks/:id`**
* **Request Body**:
    ```json
    {
      "title": "React Official Docs",
      "description": "Updated description",
      "tags": ["react", "docs"]
    }
    ```
* **Response Status**: `200 OK`

### Delete a Bookmark
**`DELETE /api/bookmarks/:id`**
* **Response Status**: `204 No Content`

---

## ▶️ How to Run the Project

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <filename>

Run the Backend

cd backend
npm install
node server.js


Run the Frontend
cd frontend
npm install
npm run dev
```


### Running Tests
To ensure the backend API is functioning correctly, run the unit tests:
```
cd backend
npm test
```
