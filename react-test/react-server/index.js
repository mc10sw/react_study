const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.get("/", (req, res) => {
  // input
  // req.query : ?a=1&b=2
  // req.body : post
  // req.params : :id
  // req.header : header값이 왔을 때

  // output
  //res.send("Hello world!");
  console.log(req.query, req.headers);
  res.json({ user: "kims", age: 30 });
});

app.listen(3001, () => {
  console.log("connected!");
});
