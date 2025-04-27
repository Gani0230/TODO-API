
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("database connected succesfully")
 }).catch((err)=>{
    console.log(err)
 })
    
 const todos_schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
 })

export const Todo = mongoose.model('Todo', todos_schema);

