const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userController");

router.route("/").get(userControllers.getUsers);
router
	.route("/:id")
	.get(userControllers.getUserById)
	.delete(userControllers.deleteUser)
	.put(userControllers.updateUser);

router.route("/register").post(userControllers.createUser);

module.exports = router;
