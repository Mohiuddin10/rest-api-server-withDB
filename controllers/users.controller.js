const getAllUsers = (req, res) => {
    res.status(200).json({ message: "res from controller" })
}

const getOneUser = (req, res) => {
    res.status(200).json({ message: "one user" })
}

const createUser = (req, res) => {
    res.status(201).json({ message: "Create user" })
}

const updateUser = (req, res) => {
    res.status(200).json({ message: "Update user" })
}

const deleteUser = (req, res) => {
    res.status(200).json({ message: "rDelete user" })
}

module.exports = {getAllUsers, getOneUser, createUser, updateUser, deleteUser};