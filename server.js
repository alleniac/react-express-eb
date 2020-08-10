const express = require("express");
const app = express();
const PORT = process.env.HTTP_PORT || 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.send("This is my motto.");
});

app.get("/me", (req, res) => {
  return res.json({
    name: "Allen",
    motto: "Say no to me, and I'd be grateful.",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
