const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const managerRoutes = require("./routes/managerRoutes");
require("./configs/db");

const port = 3000;
const app = express();
app.use(express.json());

app.use("/api/users/", userRoutes);
app.use("/api/books/", bookRoutes);
app.use("/api/managers", managerRoutes);

app.listen(port, () => {
	console.log("Server Running On Port 3000");
});
