import express, { Application, Request, Response } from "express";

const app: Application = express();

//parsers

app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => {
  res.send("Hello vai df d vai!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.json({
    message: "fukc",
  });
});

export default app;
