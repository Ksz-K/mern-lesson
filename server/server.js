require("dotenv").config({ path: ".env" });
const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
<<<<<<< HEAD
const path = require("path");
=======
>>>>>>> part10
const config = require("./config");
const mongoose = require("mongoose");
const path = require("path");
const loadTestData = require("./testData");

const app = express();

// import routes
const postRoutes = require("./routes/post.routes");

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", postRoutes);
app.use(
  mongoSanitize({
    replaceWith: "_"
  })
);
app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

// connects our back end code with the database
mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
  loadTestData();
});
db.on("error", err => console.log("Error " + err));

<<<<<<< HEAD
//Serve static assets in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log(`Server is running on Port: ${PORT}`);
=======
app.listen(config.PORT, function() {
  console.log("Server is running on Port:", config.PORT);
>>>>>>> part10
});
