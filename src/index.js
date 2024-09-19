import express from "express";
import bodyParser from "body-parser";

import quoteController from "./controller/quote";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/quote", quoteController);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
