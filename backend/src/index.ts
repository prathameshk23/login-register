import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "../routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  return res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
