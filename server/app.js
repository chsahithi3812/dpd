const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
require("dotenv").config();

const todoRouter = require("./src/routes/todoRouter.js");

const { mongoConnection } = require("./src/config/db.js");

app.use(express.json());
app.use(cors());

mongoConnection();

app.use("/api/to-do", todoRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
