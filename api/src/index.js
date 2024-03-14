import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bca4semnews');

const Student = mongoose.model('Student', {
    name: String,
    email: String,
    address: String
});

// Get by Normal and ID
app.get("/", function (req, res) {
    res.send("get all student's data.")
});
app.get("/:id", function (req, res) {
    res.send("get student by ID.")
});

// Post by Normal and ID
// app.post("/", (req, res) => {
//     res.send("I am post method.")
// });
// app.post("/:id", function (req, res) {
//     res.send("post employee by ID.")
// });

app.post("/", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json({status:201, message:"Student added successfully."});
});

// Put by Normal and ID
app.put("/", function (req, res) {
    res.send("I am put method.")
});
app.put("/:id", function (req, res) {
    res.send("put student by ID.")
});

// Delete by Normal and ID
app.delete("/", function (req, res) {
    res.send("I am delete method.")
});
app.delete("/:id", function (req, res) {
    res.send("delete student by ID.")
});

app.listen(1010, function () {
    console.log("Server is running on port 1010.") //one must set the port himself.
});