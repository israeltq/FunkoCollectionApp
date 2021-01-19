// Import required packages
const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("tracer").console();

// Import project files
const db = require("./datastore/datastore");
const userRouter = require("./routes/userRouter");
const funkoRouter = require("./routes/funkoRouter");

// Initialize Database
db.initialize(config.get("dbConfig.host"), config.get("dbConfig.dbName"));

// Configure Server
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", userRouter());
app.use("/api", funkoRouter()); 

app.get("/", (req, res) => {
    res.send("Welcome to my Funko Collection Web API!");
});

// Initialize Server
const port = config.get("port");
app.server = app.listen(port, () => {
    logger.info(`Running on port: ${port}`);
});

module.exports = app;
