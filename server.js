// Server code
// Eddie Saunders saunders.eddie@outlook.com 13th May 2020

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// const routes = require("./controllers/burger_Controller.js");

// app.use(routes);

// require("./routes/api-routes.js");
// require("./routes/html-routes.js");

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
