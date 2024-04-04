const express = require('express');
const cors = require("cors");
const usersRouter = require("./routes/users.route")

const app = express();
app.use(cors());
// to get data excess from website form
app.use(express.urlencoded({ extended: true }))
//to use json
app.use(express.json());

// get users 
app.use("/users", usersRouter)

app.get("/", (req, res) => {
    res.status(200).send("waoo app is running")
})

// handle error route 
app.use((req, res, next) => {
    res.status(404).json({ message: "mathar upre diye gese, buijja request de" })
})

//handle server error
app.use((err, req, res, next) => {
    res.status(500).json({ message: "something broken" })
})

module.exports = app;