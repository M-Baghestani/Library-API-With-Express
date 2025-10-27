const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/newLibrary";

mongoose
	.connect(dbURL)
	.then(() => {
		console.log("Connected To DB");
	})
	.catch((err) => console.log("Connection Failed! : ", err));
