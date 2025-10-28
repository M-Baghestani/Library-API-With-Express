const Validator = require("fastest-validator");
const v = new Validator();

const bookSchema = {
	title: { type: "string" },
	author: { type: "string" },
	publisher: { type: "string" },
	isbn: { type: "number" },
	category: { type: "string" },
	year: { type: "number" },
	copies: { type: "number" },
	available_copies: { type: "number" },
	free: { type: "string" },
};

const check = v.compile(bookSchema);
module.exports = check;
