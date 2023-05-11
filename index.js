const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const users = require("./data/users.json");

// Middleware
app.use(cors());

app.get("/", (req, res) => {
	res.send("Users Management Server is running...");
});

app.get("/users", (req, res) => {
	res.send(users);
});

app.post("/users", (req, res) => {
	const newUsers = req.body;
	console.log("hit user");
	console.log(req.body);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
