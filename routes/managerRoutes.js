const express = require("express");
const router = express.Router();

const managerControllers = require("../controllers/managerControllers");

router.put("/:id", managerControllers.updateUser);

module.exports = router;
