const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
  //   res.render("index", {});
});

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/about.html`);
  //   res.render("index", {});
});

app.get("/contact-me", (req, res) => {
  res.sendFile(`${__dirname}/contact-me.html`);
  //   res.render("index", {});
});

app.get("*", (req, res) => {
  res.status(404).send("what???");
});

app.listen(8080, () => {
  console.log(__dirname);
});

// app.get("/", (request, response) => {
//   response.sendFile("./index.html");
// });
