# todo-app-nodejs-mongodb

# To-Do App (Node.js, Express and MongoDB)

A full-stack to-do app where users can add, complete and delete tasks. Tasks are stored in a MongoDB Atlas database, so they are still there after refreshing the page.

## Features
- Add a new task
- Mark a task as done or not done
- Delete a task
- Tasks are saved in MongoDB and loaded again on refresh

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas with Mongoose

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /todos | Get all tasks |
| POST | /todos | Add a new task |
| PUT | /todos/:id | Update a task (for example mark it done) |
| DELETE | /todos/:id | Delete a task |

## How to Run
1. Clone the repository and open the folder:
   ```
   git clone https://github.com/YOUR_USERNAME/todo-app-nodejs-mongodb.git
   cd todo-app-nodejs-mongodb
   ```
2. Install the packages:
   ```
   npm install
   ```
3. Create a free cluster on MongoDB Atlas and copy its connection string.
4. Create a file named `.env` in the project folder with this line:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
5. Start the server:
   ```
   node server.js
   ```
   You should see "Server running on port 5000" and "MongoDB connected".
6. Open `index.html` in your browser.

## Future Improvements
- User login and personal task lists
- Editing task titles
- Deploying the app online

## Author
Marium Zehra, Computer Science student at Jinnah University for Women
