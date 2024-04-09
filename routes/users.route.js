const router = require("express").Router();
const { getAllUsers, createUser } = require("../controllers/users.controller")

router.get("/", getAllUsers);
router.post("/", createUser);


module.exports = router;