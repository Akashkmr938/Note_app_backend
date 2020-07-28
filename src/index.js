require("./db/mongoose");
const express = require("express");
const userRouter = require("./routers/user");
const notesRouter = require("./routers/notes");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(notesRouter);

app.get("/", (req, res) => {
  res.send("<h1>Server is up and running</h1>");
});

app.listen(port, () => {
  console.log(`Web server up and running on port ${port}`);
});
