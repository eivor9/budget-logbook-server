# Budget Logbook - Server

This app is designed to allow you to document a record of your financial transactions. Use it to keep track of spending over time.

Noteworthy features:

- Adding and removing transactions from your logbook
- Editing transactions in your logbook
- Viewing your logbook

## REST
**Base URL:** https://budget-logbook-server.onrender.com

Available endpoints:
```
{
    createNewTransaction: `https://budget-logbook-server.onrender.com/logbook`,
    getAllTransactions: `https://budget-logbook-server.onrender.com/logbook`,
    getOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id`,
    editOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id,
    deleteOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id,
}
```

### Creating a new transaction:
To create a new transaction, send a POST request to the /logbook endpoint.
```
https://budget-logbook-server.onrender.com/logbook/
```
```
Request Body:

{
      "id": 'bls-2XB37',
      "date": '2024-06-12',
      "description": "Uncharted: Drake's Fortune",
      "category": 'Shopping & Entertainment',
      "merchant": 'eBay',
      "amountInCents": 596
}
```
```
Transaction added successfully...
```
*Transaction objects must follow the format shown in the above example*

### Viewing your transactions:
To view a list of all transactions, send a GET request to the /logbook endpoint.
```
https://budget-logbook-server.onrender.com/logbook
```
```
[
    {
      "id": 'bls-2XB37',
      "date": '2024-06-12',
      "description": "Uncharted: Drake's Fortune",
      "category": 'Shopping & Entertainment',
      "merchant": 'eBay',
      "amountInCents": 596
    },
    ...
]
```

### Viewing a single transaction:
To view a single transaction, send a GET request to the /logbook/:id endpoint.
```
https://budget-logbook-server.onrender.com/logbook/:id
```
```
{
      "id": 'bls-2XB37',
      "date": '2024-06-12',
      "description": "Uncharted: Drake's Fortune",
      "category": 'Shopping & Entertainment',
      "merchant": 'Amazon',
      "amountInCents": 596
}
```

### Editing a transaction:
To edit the details of any particular transaction, send a PUT repuest to the /logbook/:id endpoint.
```
https://budget-logbook-server.onrender.com/logbook/:id
```
```
Request Body:

{
      "id": 'bls-2XB37',
      "date": '2024-06-12',
      "description": "Uncharted: Drake's Fortune",
      "category": 'Shopping & Entertainment',
      "merchant": "eBay",
      "amountInCents": 596
}
```
```
Transaction updated successfully...
```
*Transaction objects must follow the format shown in the above example*

### Removing transactions:
To remove a transaction from your logbook, send a DELETE request to the /logbook/:id endpoint.
```
https://budget-logbook-server.onrender.com/logbook/:id
```
```
Transaction deleted successfully...
```

