const Validator = require("fastest-validator");
const v = new Validator();

const borrowSchema = {
	book_id: { type: "number" },
	member_id: { type: "number" },
	borrow_date: { type: "string" },
	due_date: { type: "string" },
	return_date: { type: "string" },
	status: { type: "string" },
};

const check = v.compile(borrowSchema);
module.exports = check;
