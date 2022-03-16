const express = require("express");
const userRouter = require("./src/routes/users.route");

const app = express();
const PORT = process.env.SERVER_CONTAINER_PORT;
app.use(express.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
