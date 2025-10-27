const Validator = require("fastest-validator");
const v = new Validator();

const bookSchema = {
	name: { type: "string" },
	author: { type: "string" },
	free: { type: "string" },
};

const check = v.compile(bookSchema);
module.exports = check;
