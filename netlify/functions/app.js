const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/hello", (req, res) => res.send("Hello World!"));
app.use("/app/", router);

export const handler = serverless(app);