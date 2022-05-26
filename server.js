const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");
const bodyParser = require("body-parser");
const http = require("http");
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
	// await fetch(encodeURI(req.body.url))
	// 	.then((response) => response.json())
	// 	.then((resJosn) => {
	// 		console.log(resJosn);
	// 		res.status(200).send(resJosn);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 		res.status(500).send(err);
	// 	});
	const httpRequest = http.request(req.body.url, (httpResponse) => {
		httpResponse.on("data", (chunk) => {
			console.log(chunk);
			res.status(200).send(chunk);
		});
		httpResponse.on("end", () => {
			console.log("FINISH");
		});
	});
	httpRequest.on("error", (e) => {
		console.log(err);
		res.status(500).send(err);
	});
	httpRequest.end();
});

app.listen(PORT, () => {
	console.log("server is starting on port", PORT);
});
