const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("tracer").console();

const db = require("./datastore/datastore");

const port = config.get("port");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.initialize(config.get("dbConfig.host"), config.get("dbConfig.dbName"));

app.get("/", (req, res) => {
    res.send("Welcome to my Funko Collection Web API!");
});

app.server = app.listen(port, () => {
    logger.info(`Running on port: ${port}`);
});

module.exports = app;
