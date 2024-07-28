import Express from "express";  
import { app as userRoutes} from "./routes/user";
import {app as getUser} from "./routes/getUser"
import {app as addExpence} from "./routes/addExpence"

const app = Express()
export {app}
app.use(Express.json());

app.use(userRoutes)
app.use(getUser)
app.use("addExpence",addExpence)

app.use((req,res,next)=>{
    console.log(req.method,req.url)
    next()
})

app.use((req,res)=>{
    res.status(404).send({message: "not found"})
})