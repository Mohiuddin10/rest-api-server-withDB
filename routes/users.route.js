const router = require("express").Router();
const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require("../controllers/users.controller")

router.get("/", getAllUsers);
router.get("/:id", getOneUser)
router.post("/", createUser);
router.delete("/:id", deleteUser)
router.patch("/:id", updateUser)



module.exports = router;