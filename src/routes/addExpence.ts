import { Router } from "express";
import { users } from "./user";
import { isNonEmptyString } from "../utilities/non-empty-string";

interface expense {
    id: number,
    expencerUserID: number,
    groupUserIds: string,
    groupQuantity: number,
    title: string,
    description: string,
}
const expenses : expense [] = []
export const app = Router()

app.post("/",(req,res)=>{
    const userID = req.headers["authorization"]

    const loggedInUser = users.find((x)=> x.id === userID)

    if(!loggedInUser){
        res.status(401).send({message: "Unauthorized"});
        return
    }
const { expencerUserID, groupUserIds, groupQuantity, title,description } = req.body
    //validate
    if (!isNonEmptyString(title)){
        res.status(400).send({message: "bad request"})
        return;
    }
    if (groupUserIds == undefined){
        res.status(400)
        .send({message: "groupUserIds sould be provided"})
        return;
    
    }
    //create plan
    const expense = {
        id : expenses.length + 1,
        expencerUserID,
        groupUserIds,
        groupQuantity: groupUserIds.length,
        title,
        description : description || "",
    };
    expenses.push(expense)
    res.status(200).send(expense)
})

