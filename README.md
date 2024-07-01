# Budget Logbook - Server

This app is designed to allow you to document a record of your financial transactions. Use it to categorize individual transactions and to keep track of spending over time.

Noteworthy features:

- Adding and removing transactions from your logbook
- Editing transactions in your logbook
- Displaying your logbook in sorted order

## REST
**Base URL:** https://budget-logbook-server.onrender.com

Available endpoints:
```
{
    getAllTransactions: `https://budget-logbook-server.onrender.com/logbook`,

    createNewTransaction: `https://budget-logbook-server.onrender.com/logbook`,

    getOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id`,

    deleteOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id,

    editOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id
}
```

### Create one transaction:
Create a new transaction with a POST request at the /logbook endpoint.
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

### Get all transactions:
Get the list of all transactions in chronological using the /logbook endpoint.

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

### Get one transaction:
Get the details about one transaction using the logbook/:id endpoint.
```
https://budget-logbook-server.onrender.com/logbook/:id
```
```
{
      "id": 'bls-2XB37',
      "date": '2024-06-12',
      "description": "Uncharted: Drake's Fortune",
      "category": 'Shopping & Entertainment',
      "merchant": 'eBay',
      "amountInCents": 596
}
```

### Edit one transaction:
Update the values of any transaction with with a PUT request on the logbook/:id endpoint.
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
      "merchant": 'eBay',
      "amountInCents": 596
}
```
```
Transaction updated successfully...
```
*Transaction objects must follow the format shown in the above example*

### Delete one transaction:
Remove a transaction from your logbook using the logbook/:id endpoint.
```
https://budget-logbook-server.onrender.com/logbook/:id
```
```
Transaction deleted successfully...
```

