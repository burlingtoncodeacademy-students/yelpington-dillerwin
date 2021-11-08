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
app.use(express.static("./client/build"));

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
    .sort((a, b) => a.name - b.name);
}

//get for list json of all diners
app.get("/api/diners", (req, res) => {
  console.log(`get diner list`);
  let diners = allDiners();
  let data = JSON.stringify(diners);
  res.type("application/json").send(data);
});

//html page for list of diners
app.get("/diners", (req, res) => {
  console.log(`list of diners`);
  res.sendFile(path.join(publicDir, "diners.html"));
});

//api get for individual diner pages
app.get("/api/:dinerId", (req, res) => {
  console.log("specific restaurant");
  let filePath = path.join(apiDir, req.params.dinerId + ".json");
  res.sendFile(filePath);
});

//html get for individual diner pages
app.get("/diners/:dinerId", (req, res) => {
  console.log("specific diner html");
  let filePath = path.join(apiDir, req.params.dinerId + ".json");
  if (fs.existsSync(filePath)) {
    let htmlFile = path.join(publicDir, "diner.html");
    res.sendFile(htmlFile);
  } else {
    res.status(404).send(`"${req.params.dinerId}" not found`);
  }
});
