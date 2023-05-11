const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const users = require("./data/users.json");

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Users Management Server is running...");
});

app.get("/users", (req, res) => {
	res.send(users);
});

app.post("/users/", (req, res) => {
	const newUser = req.body;
	newUser.id = users.length + 1;
	console.log(req.body);
	users.push(newUser);
	res.send(newUser)
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
