const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

cosnt app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World");
})

app.get("/:params", async (req, res) => {
	const response = await fetch(req.params.params);
	res.send(response);	
})

app.listen(process.env.PORT||3000, ()=> {
console.log("server is starting")});
