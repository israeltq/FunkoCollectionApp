const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to my Funko Collection Web API!");
});

app.server = app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});

module.exports = app;
