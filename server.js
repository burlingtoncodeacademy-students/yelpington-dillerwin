const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;
const publicDir = path.resolve("./client/src");
const apiDir = path.resolve("./api");

app.listen(port, () => {
  console.log(`Hearing you on port ${port}`);
});

app.use(express.static("./client/build"));

app.get("/", (req, res) => {
  res.send(console.log(`homepage`));
});

app.get("/api", (req, res) => {
  console.log(`viewing api`);
  res.sendFile(path.join(apiDir, "/diners.json"));
});

function allDiners() {
  return fs
    .readdirSync(apiDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(apiDir, file))))
    .sort((a, b) => a.name - b.name);
}

app.get("/api/diners", (req, res) => {
  console.log(`get diner list`);
  let diners = allDiners();
  let data = JSON.stringify(diners);
  res.type("application/json").send(data);
});

app.get("/diners", (req, res) => {
  console.log(`list of diners`);
  res.sendFile(path.join(publicDir, "diners.html"));
});

app.get("/api/:dinerId", (req, res) => {
  console.log("specific restaurant");
  console.log(req.params.dinerId);
  let filePath = path.join(apiDir, req.params.dinerId + ".json");
  console.log(filePath);
  res.sendFile(filePath);
});

app.get("/:dinerId", (req, res) => {
  console.log("specific diner html");
  let filePath = path.join(apiDir, req.params.dinerId + ".json");
  console.log(filePath);
  if (fs.existsSync(filePath)) {
    let htmlFile = path.join(publicDir, "diner.html");
    res.sendFile(htmlFile);
  } else {
    res.status(404).send(`"${req.params.dinerId}" not found`);
  }
});
