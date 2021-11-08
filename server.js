const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;
const publicDir = path.resolve("./client/build");
const apiDir = path.resolve("./api");
const cors = require("cors");

app.listen(port, () => {
  console.log(`Hearing you on port ${port}`);
});

app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.send(console.log(`homepage`));
});

app.get("/api", (req, res) => {
  console.log(`viewing api`);
  res.sendFile(__dirname + "/api/diners.json");
});

app.get("/api/:id", (req, res) => {
  console.log("specific restaurant");
  let filePath = path.join(apiDir, req.params.id + ".json");
  res.sendFile(filePath);
});
