const app = require("./app");

const PORT = process.env.PORT || 5000;

// const PORT = 4000;

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
})