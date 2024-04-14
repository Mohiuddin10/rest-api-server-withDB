const User = require('../models/users.model');
const { v4: uuidv4 } = require('uuid');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    const data = req.body.age;
    console.log("data is: ", data);
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.userName,
            age: Number(req.body.age)
        })
        await newUser.save();
        console.log(newUser);
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error, message)
    }
}

const updateUser = (req, res) => {
    res.status(200).json({ message: "Update user" })
}

const deleteUser = (req, res) => {
    res.status(200).json({ message: "rDelete user" })
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };