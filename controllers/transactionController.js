const express = require("express");
const logbook = express.Router();
const transactions = require("../models/transactions");

// SHOW
logbook.get("/:id", (req, res) => {
    const { id } = req.params;
    const index = transactions.findIndex( x => x.id === id);
    if (index === -1)
        res.status(404).send(`Transaction with an id of '${id}' does not exist...`);
    else{
        res.status(200).json(transactions[index]);
    }
});

// INDEX
logbook.get("/", (req, res) => {
    res.status(200).json(transactions);
});

// CREATE
logbook.post("/", (req, res) => {
    const newTransaction = req.body;
    if(isValidTransaction(newTransaction)){
        transactions.push(newTransaction);
        res.status(200).send("Transaction added successfully...");
    } else {
        res.status(400).send(`Transaction format invalid\n\n${JSON.stringify(newTransaction)}`);
    }
        
});

// DELETE
logbook.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = transactions.findIndex(x => x.id === id);
    if (index === -1){
        res.status(404).send(`Transaction with an id of '${id}' does not exist...`);
    } else {
        transactions.splice(index, 1);
        res.status(200).send("Transaction deleted successfully...");
    }
});

// UPDATE
logbook.put("/:id", (req, res) => {
    const { id } = req.params;
    const index = transactions.findIndex(x => x.id === id);
    if (index === -1){
        res.status(404).send(`Transaction with an id of '${id}' does not exist...`);
    } else {
        transactions[index] = req.body;
        res.status(200).send("Transaction updated successfully...");
    }
})

function isValidTransaction(transaction){
    const { id, date, description, category, merchant, amount } = transaction;

    const hasExpectedKeys = id && date && description && category && merchant && typeof(amount) === "number";
    const hasExtraKeys = Object.keys(transaction).length > 6
    
    return hasExpectedKeys && !hasExtraKeys;
}

module.exports = logbook;