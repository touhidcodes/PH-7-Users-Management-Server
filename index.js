const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const users = require("./data/users.json")

// app.use(cors());

app.get("/", (req, res) => {
	res.send("Users Management Server is running...");
});

app.get("/users", (req, res) => {
	res.send(users);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
