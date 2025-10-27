const Validator = require("fastest-validator");
const v = new Validator();

const userSchema = {
	name: { type: "string", min: 3 },
	username: { type: "string" },
	email: { type: "email" },
	password: { type: "string", min: 8 },
	confirmPassword: { type: "equal", field: "password" },
};

const check = v.compile(userSchema);
module.exports = check;
