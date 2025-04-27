import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Todo } from './db.js';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.post("/",async (req,res)=>{
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;

    try{
        await Todo.create({
            id,
            title,
            description
        })
    }
    catch(err){
        res.status(500).json({
            msg: err
        })
    }
    res.status(201).json({
        msg: "create todo successfully"
    })

})

app.get("/todos/:id",async (req,res)=>{
    const id  = req.params.id
    const random_index = Math.floor(Math.random()*(10-1+1)+1)
    const todo = await Todo.findOne({
        id: random_index
    })
    if (todo){
        todo.id = id
        res.status(200).json({
            todo
        })
    }
    else{
        res.status(404).json({
            msg: "todo not found with that id"
        })
    }
})

app.listen(process.env.PORT, ()=>{
    console.log("server is running on port 3000")
})