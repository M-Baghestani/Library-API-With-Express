const express = require("express");

const router = express.Router();

const bookControllers = require("../controllers/bookControllers");

router.get("/", bookControllers.getBooks);
router.get("/:id", bookControllers.getBookById);
router.post("/add", bookControllers.addBook);
router.delete("/:id", bookControllers.deleteBook);
router.put("/:id", bookControllers.updateBook);

module.exports = router;
