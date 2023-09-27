require("dotenv").config();
const express = require("express");
var cors = require("cors");

const { subscription } = require("./router");
const { vapidDetails } = require("./web-push");

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use(cors());

app.use("/subscribe", subscription);
vapidDetails()
app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
