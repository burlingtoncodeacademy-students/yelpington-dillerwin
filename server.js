const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;
const publicDir = path.resolve("./client/src");
const apiDir = path.resolve("./api");

//sets port for app to run on
app.listen(port, () => {
  console.log(`Hearing you on port ${port}`);
});

//sets static page for homepage
app.use(express.static("./client/src/index"));

app.use(express.urlencoded({ extended: true }));

//sets get for /api track
app.get("/api", (req, res) => {
  console.log(`viewing api`);
  res.sendFile(path.join(apiDir, "/diners.json"));
});

//function to collate diner data into single json
function allDiners() {
  return fs
    .readdirSync(apiDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(apiDir, file))))
    .sort((alpha, beta) => alpha.name - beta.name);
}

//get for list json of all diners
app.get("/api/diners", (req, res) => {
  let diners = allDiners();
  let data = JSON.stringify(diners);
  res.type("application/json").send(data);
});

//html page for list of diners
app.get("/diners", (req, res) => {
  res.sendFile(path.join(publicDir, "diners.html"));
});

//api get for individual diner pages
app.get("/api/:dinerId", (req, res) => {
  let filePath = path.join(apiDir, req.params.dinerId + ".json");
  res.sendFile(filePath);
});
