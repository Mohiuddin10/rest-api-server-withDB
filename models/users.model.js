const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    age:{
        type: String,
        require: true,
    },
    createdOn:{
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model("user", userSchema);