const express = require('express');

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.status(200).send("app is running monu")
})

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
})