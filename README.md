# To-Do App Backend (Node.js + Express + MongoDB)

## Step 1: Set up MongoDB Atlas
1. Create a free account at mongodb.com/atlas and make a free cluster.
2. Database Access: create a user (simple password, letters and numbers only).
3. Network Access: choose "Allow access from anywhere".
4. Connect > Drivers: copy the connection string.
5. Add the database name before the `?`, for example:
   `mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/todoapp?retryWrites=true&w=majority`

## Step 2: Create the project
Open a terminal and run these one by one:

    mkdir todo-app
    cd todo-app
    npm init -y
    npm install express mongoose cors dotenv

Put the `server.js` file in this folder.

## Step 3: Create the .env file
Create a file named `.env` in the same folder with this one line:

    MONGO_URI=paste_your_connection_string_here

## Step 4: Create the .gitignore file
Create a file named `.gitignore` with these two lines (keeps your password off GitHub):

    node_modules
    .env

## Step 5: Run the server

    node server.js

You should see:
- Server running on port 5000
- MongoDB connected

Open http://localhost:5000/todos in your browser. It should show `[]`.

## Step 6: Test adding a task
In VS Code, install the "Thunder Client" extension. Send a POST request to
`http://localhost:5000/todos` with this body:

    { "title": "Learn Express" }

Refresh http://localhost:5000/todos. Your task should appear. That means the
backend is working and saving to a real database.

## If it doesn't connect
The message after "Connection error:" tells you the cause.
- "Authentication failed": wrong username or password in the connection string.
- Timeout: Network Access is not set to allow access from anywhere.
- Make sure `.env` is in the same folder as `server.js`.
- If your password has special characters, change it to letters and numbers only.
