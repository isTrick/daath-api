import express from "express";
import bodyParser from "body-parser";

import quoteController from "./controller/quote";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/quote", quoteController);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
