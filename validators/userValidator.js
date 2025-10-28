const Validator = require("fastest-validator");
const v = new Validator();

const userSchema = {
	name: { type: "string", min: 3 },
	email: { type: "email" },
	phone: { type: "string" },
	membership_date: { type: "date" },
	is_active: { type: "boolean" },
	password: { type: "string", min: 8 },
	confirmPassword: { type: "equal", field: "password" },
	role: { type: "string" },
};

const check = v.compile(userSchema);
module.exports = check;
