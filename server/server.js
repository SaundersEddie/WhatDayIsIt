import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import ourDays from './routes/dayRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_CONNECT = process.env.MONGO_DB;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Open Connections 

if (process.env.NODE_ENV === "production") {
  app.use(
          "/static",
          express.static(path.join(__dirname, "../client/build/static"))
  );
  app.get("/", (req, res) => {
          res.sendFile(path.join(__dirname, "../client/build/"));
  });
}

mongoose.connect(MONGO_CONNECT, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`API Server listening on ${PORT}`)))
  .catch((error) => console.log("An Error Occurred: ", error.message));

app.use("/wdii", ourDays);
