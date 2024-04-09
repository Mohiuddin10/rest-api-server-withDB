const User = require('../models/users.model');
const { v4: uuidv4 } = require('uuid');

const getAllUsers = (req, res) => {
    res.status(200).json({ message: "res from controller" })
}

const getOneUser = (req, res) => {
    res.status(200).json({ message: "one user" })
}

const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
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