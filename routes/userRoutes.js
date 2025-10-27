const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userController");

router.get("/", userControllers.getUsers);
router.get("/:id", userControllers.getUserById);
router.post("/register", userControllers.createUser);
router.delete("/:id", userControllers.deleteUser);
router.put("/:id", userControllers.updateUser);

module.exports = router;