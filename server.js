// Server code
// Eddie Saunders saunders.eddie@outlook.com 13th May 2020
// mongodb+srv://myTestUser:<password>@cluster0.gsy8o.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 9000;
const app = express();

require ('dotenv').config();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/dayController.js");

// app.use(routes);

// require("./routes/api-routes.js");
// require("./routes/html-routes.js");

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
