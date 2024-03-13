import express from 'express';

const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
})

app.listen(1010, function () {
    console.log("Server is running on port 1010."); //one must set the port himself.
});