const express = require('express');
const todosRouter = express.Router();
const Todos = require('./models/Todos');


todosRouter.get('/',function(req,res){
    Todos.find({}, function (err, data) {
        if(err){
            res.status(500).send({"msg":"Something went wrong"});
        }else{
            res.status(200).send({"msg":"OK","data":data});
        }
    });
})

todosRouter.post('/',function(req,res){
    var todos = new Todos({
        "title":req.body.title,
        "description":req.body.description
    })
    todos.save((err,data)=>{
        if(err){
            res.status(500).send({"msg":"Something went wrong"});
        }else{
            res.status(200).send({"msg":"OK","data":data});
        }
    });    
})

todosRouter.put('/:id',(req,res)=>{
    var todos = {
        "title":req.body.title,
        "description":req.body.description
    }
    Todos.update({_id:req.params.id},{$set:todos},(err,data)=>{
        if(err){
            res.status(500).send({"msg":"Something went wrong"+err});
        }else{
            res.status(200).send({"msg":"OK","data":data});
        }
    });
})

todosRouter.delete('/:id',(req,res)=>{
    Todos.remove({_id:req.params.id},(err,data)=>{
        if(err){
            res.status(500).send({"msg":"Something went wrong"+err});
        }else{
            res.status(200).send({"msg":"OK","data":data});
        }
    });
})

module.exports = todosRouter;