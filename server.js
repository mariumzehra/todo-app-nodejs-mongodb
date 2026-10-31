require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err.message));

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    title: { type: String, required: true },
    done: { type: Boolean, default: false },
  })
);

// Get all tasks
app.get("/todos", async (req, res) => {
  res.json(await Todo.find());
});

// Add a task
app.post("/todos", async (req, res) => {
  res.json(await Todo.create({ title: req.body.title }));
});

// Update a task (mark done / edit title)
app.put("/todos/:id", async (req, res) => {
  res.json(await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

// Delete a task
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
