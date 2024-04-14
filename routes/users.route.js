const router = require("express").Router();
const { getAllUsers, createUser, getOneUser } = require("../controllers/users.controller")

router.get("/", getAllUsers);
router.get("/:id", getOneUser)
router.post("/", createUser);



module.exports = router;