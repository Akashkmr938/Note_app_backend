const mongoose = require("mongoose");
require("dotenv").config();

const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;

const connectionURL = `mongodb+srv://${userName}:${password}@cluster0.vk12q.gcp.mongodb.net/task-manager-api?retryWrites=true&w=majority`;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
