# Budget Logbook - Server

This app is designed to allow you to document a record of your business' financial transactions. Use it to keep track of cash flow over time.

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
    editOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id`,
    deleteOneTransaction: `https://budget-logbook-server.onrender.com/logbook/:id`,
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
      id: 'bls-RQ51S',
      date: '2024-06-12',
      description: 'Meat',
      category: 'Food and Beverage Purchases',
      otherParty: 'Sons of a Butcher',
      amountInCents: 185749
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
            id: 'bls-RQ51S',
            date: '2024-06-12',
            description: 'Meat',
            category: 'Food and Beverage Purchases',
            otherParty: 'Sons of a Butcher',
            amountInCents: 185749
      },
    ...
]
```

### Viewing a single transaction:
To view any particular transaction, send a GET request to the /logbook/:id endpoint.
```
https://budget-logbook-server.onrender.com/logbook/:id
```
```
{
      id: 'bls-RQ51S',
      date: '2024-06-12',
      description: 'Meat',
      category: 'Food and Beverage Purchases',
      otherParty: 'Sons of a Butcher',
      amountInCents: 185749
}
```

### Editing a transaction:
To edit the details of any particular transaction, send a PUT request to the /logbook/:id endpoint.
```
https://budget-logbook-server.onrender.com/logbook/:id
```
```
Request Body:

{
      id: 'bls-RQ51S',
      date: '2024-06-13',
      description: 'Meat',
      category: 'Food and Beverage Purchases',
      otherParty: 'Sons of a Butcher',
      amountInCents: 185749
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
