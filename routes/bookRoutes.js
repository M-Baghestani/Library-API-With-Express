const express = require("express");

const router = express.Router();

const bookControllers = require("../controllers/bookControllers");

// router.get("/", bookControllers.getBooks);
// router.get("/:id", bookControllers.getBookById);
// router.post("/add", bookControllers.addBook);
// router.delete("/:id", bookControllers.deleteBook);
// router.put("/:id", bookControllers.updateBook);

router.route("/").get(bookControllers.getBooks);
router
	.route("/:id")
	.get(bookControllers.getBookById)
	.delete(bookControllers.deleteBook)
	.put(bookControllers.updateBook);
router.route("/add").post(bookControllers.addBook);

module.exports = router;
