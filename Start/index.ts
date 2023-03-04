import express , { Express, Request, Response } from "express";

const app = express();

const PORT = 8000;


app.get("/" , (req : Request , res : Response  ) =>{
    res.send("hello");
} )


app.listen(PORT , (()=>{
    console.log(`listening to ${PORT}`)
}))
