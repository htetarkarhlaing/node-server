const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");
const bodyParser = require("body-parser");
require("dotenv").config();

//PORT
const PORT = process.env.PORT || 8000;

const app = express();
//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
	res.status(200).json("Hello World");
});

app.post("/", async (req, res) => {
	process.binding("http_parser").HTTPParser =
		require("http-parser-js").HTTPParser;
	await fetch(encodeURI(req.body.url))
		.then((response) => response.json())
		.then((resJosn) => {
			console.log(resJosn);
			res.status(200).send(resJosn);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err);
		});
});

app.listen(PORT, () => {
	console.log("server is starting on port", PORT);
});
