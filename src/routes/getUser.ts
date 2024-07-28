import { users } from "./user"
import { Router } from "express"


export const app = Router()

app.get('/getUser', (req, res) => {
    const userSummaries = users.map(user => {
      return { id: user.id, name: user.name };
    });
    res.json(userSummaries);
  });