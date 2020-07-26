const express = require('express')
const app = express();
const todosRouter = require('./todos')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://viruyadav484:viru@7862@node-rest-shop-r5bjh.mongodb.net/newtodos?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection.on('connected',()=>{
    console.log(`Mongodb is connected`);
})

mongoose.connection.on('error',(err)=>{
    console.log(`Mongodb is not connected : ${err}`);
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/todos',todosRouter);

app.listen(4000,()=>{
    console.log(`Server is running on http://localhost:4000/`);
});