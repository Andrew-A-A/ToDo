# ToDo App

A simple ToDo application implemented using **CAP (Cloud Application Programming Model) with CDS**, **OData V4**, and **SAPUI5**. This app allows users to create, check, and delete tasks, with tasks stored in an **SQLite database** on the server.

## Features
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persist tasks in an SQLite database using CAP

## Technologies Used
- **CAP (Cloud Application Programming Model)** for backend
- **CDS (Core Data Services)** to define entities and services
- **OData V4** for data interaction
- **SAPUI5** for frontend UI
- **SQLite** as the database

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [CAP CLI](https://cap.cloud.sap/docs/get-started/) (`@sap/cds`)
- [SQLite](https://www.sqlite.org/download.html)

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the CAP backend:
   ```sh
   cds run
   ```

4. Navigate to the `webapp` folder and start a local server for SAPUI5:
   ```sh
   cd app/todo/webapp
   ui5 serve
   ```

5. Open the app in your browser:
   ```sh
   http://localhost:4004/webapp/index.html
   ```

## Project Structure
```
/todo
│── app/             # SAPUI5 Frontend
│   ├── webapp/
│   │   ├── view/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── index.html
│── srv/             # CAP Service Implementation
│   ├── service.cds
│── db/              # Database Schema
│   ├── schema.cds
│── package.json     # Dependencies and scripts
│── README.md        # Project Documentation
```

## API Endpoints
| Method | Endpoint    | Description         |
|--------|------------|---------------------|
| GET    | `/Task`    | Get all tasks       |
| POST   | `/Task`    | Create a new task   |
| DELETE | `/Task(ID)`| Delete a task       |

## Screenshot
![ToDo App UI](https://github.com/user-attachments/assets/7cc4fd55-c939-42b3-90f6-f5aa83c2b0b9)


