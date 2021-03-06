// express app
import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express(); // create an express application
const port = 3000; // default port to listen
app.use(cors(), bodyParser.json()); // add middlewares

// a static file server that points to the "public" directory
app.use(express.static(__dirname + "/public"));

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
    const { name } = req.query;
    res.send(`Hello ${name}!`);
});

// define a route handler for welcome by name from path /welcome/:name
app.get("/welcome/:name/:age", (req: Request, res: Response) => {
    const { name, age } = req.params;
    res.send(`Hello ${name}!, your age is ${age}`);
});

// define a route handler for welcome by name from body
app.post("/welcome", (req: Request, res: Response) => {
    const { name } = req.body;
    console.log(name);
    res.send(`Hello ${name}!`);
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

export default app;