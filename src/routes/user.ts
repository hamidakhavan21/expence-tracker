import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { isNonEmptyString } from "../utilities/non-empty-string";

export interface User {
    id: string,
    name: string,
    username: string,
    password: string
}    


export const app = Router()


export const users : User[] = [
    {
        id: uuidv4(),
        name: "ali",
        username: "ali",
        password: "ali"
    },
    {
        id: uuidv4(),
        name: "hamid",
        username: "hamid",
        password: "hamid"
    },
    {
        id: uuidv4(),
        name: "qazal",
        username: "qazal",
        password: "qazal"
    },
    {
        id: uuidv4(),
        name: "Rey",
        username: "rey",
        password: "rey"
    },
    {
        id: uuidv4(),
        name: "easy",
        username: "easy",
        password: "easy"
    }
]


app.post("/login",(req,res)=>{
    const {username,password} =req.body;
    
    if(!isNonEmptyString(username)){
    res.status(400).send({message: "wrong Usename format"})
    return;
    }
    if(!isNonEmptyString(password)){
    res.status(400).send({message: "wrong format password"})
    return
    }

    const user = users.find(
        (x) => x.username == username && x.password == password
    );

    if(user == undefined){
        res.status(401).send({message: "invalid username or password"})
        return;
    }

    res.status(200).send(user);
});




// app.get("/getUser",(req,res)=>{
//     res.json(users)
// })