// DEPENDENCIES
const express = require("express");
const transactionsController = require("./controllers/transactionController");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to your Transactions Logbook");
});

app.use("/logbook", transactionsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
})

// EXPORT
module.exports = app;