const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/posts", (req, res) => {
  const data = [
    {
      id: "1adfasf",
      title: "Lorem Ipsum",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    },
    {
      id: "2evxc34",
      title: "Lorem Ipsum II",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    }
  ];
  res.json(data);
});

//Serve static assets in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
  console.log(`Server is running on port: ${PORT}`);
});
