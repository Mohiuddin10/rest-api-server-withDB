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
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.userName,
            age: Number(req.body.age)
        })
        await newUser.save();
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error, message)
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id })
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne({ id: req.params.id })
        res.status(200).json({ message: "User Removed" });
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };