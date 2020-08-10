"use strict";

var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var path = require("path");

app.use(express["static"](path.join(__dirname, "client", "build")));
app.get("/", function (req, res) {
  res.send("This is my motto.");
});
app.get("/me", function (req, res) {
  return res.json({
    name: "Allen",
    motto: "Say no to me, and I'd be grateful."
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
