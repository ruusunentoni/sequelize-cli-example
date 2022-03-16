const express = require("express");

const app = express();
const PORT = process.env.SERVER_CONTAINER_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
