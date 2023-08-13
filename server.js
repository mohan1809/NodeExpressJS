const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!");
});
const products = [
    {
        id:1,
        name:"mohan"
    },
    {
        id:2,
        name:"Reddy"
    },
    {
        id:3,
        name:"Siripi"
    }
];

app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/products/:id',(req,res)=>{
    const newData = products.filter(item => item.id.toString() === req.params.id);
    return res.send(newData);
});

app.post('/addproduct',(req,res)=>{
    const {id,name} = req.body;
    console.log(id,name);
    return res.send("Data Send !!");
});

app.listen(3000,()=> console.log('Server is Running...'));