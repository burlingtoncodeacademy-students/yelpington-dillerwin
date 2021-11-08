const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;
const publicDir = path.resolve("./client/public");
const apiDir = path.resolve("./api");
const cors = require("cors");
const { allowedNodeEnvironmentFlags } = require("process");

app.listen(port, () => {
  console.log(`Hearing you on port ${port}`);
});

app.use(cors());

app.get("/api", (req, res) => {
  console.log(`viewing api`);
  res.sendFile(__dirname + "/api/diners.json");
});

app.get("/api/:restaurant-id", (req, res) => {
  console.log("specific restaurant");
  let filePath = path.join(apiDir, req.params.id + ".json");
  res.sendFile(filePath);
});

app.get("/api/:restaurant-id", (req, res) => {
  console.log(`specific restaurant page get`);
  let filePath = path.join(apiDir, req.params.id + ".json");
  console.log(filePath);
  if (fs.existsSync(filePath)) {
    let htmlFile = path.join(publicDir, "article.html");
    res.sendFile(htmlFile);
  } else {
    res.status(404).send(`Diner ${req.params.id} not found}`);
  }
});
