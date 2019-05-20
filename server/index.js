//Packages
const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

//Imports
const schema = require("./graphql/schema/index");

// app
const app = express();
//allow cross-origin requests
app.use(cors());

//database
mongoose.connect(
  `mongodb://Aaron:gokuh123@ds331145.mlab.com:31145/portfolio`,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/", function (req, res) {
  res.send("GraphiQL Deployment for Portfolio.");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("App listening");
});
