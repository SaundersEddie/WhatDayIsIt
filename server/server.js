// Server code
// Eddie Saunders saunders.eddie@outlook.com 13th May 2020
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_CONNECT = process.env.MONGO_DB;
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGO_CONNECT, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Open Connections 

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
