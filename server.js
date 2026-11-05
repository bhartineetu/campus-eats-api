const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));


//data
let items = [
    {id: 1, name: "Burger", price: 80, avaialbale: true},
    {id: 2, name: "Pizza", price: 120, avaialbale: true},
    {id: 3, name: "sandwich", price: 60, avaialbale: false},
    {id: 4, name: "Pasta", price: 100, avaialbale: true},

];

let nextId = 5;

app.get('/items', (req, res) => {
    res.status(200).json(items);
});


app.get('/items/:id', (req, res) => {
    const id = Number(req.params.id);

    const item = items.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            error: "Item not found"
        });
    }

    res.status(200).json(item);
});


app.post('/items', (req, res) => {
    const { name, price, available } = req.body;

    if (!name || price === undefined || available === undefined) {
        return res.status(422).json({
            error: "Name, price and availability are required"
        });
    }

    const newItem = {
        id: nextId++,
        name,
        price,
        available
    };

    items.push(newItem);

    res.status(201).json(newItem);
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
