const router = require("express").Router();
const db = require("../sequelize/models");

router.get("/", async (req, res, next) => {
  try {
    const users = await db.User.findAll({});
    res.status(200).json(users);
  } catch (error) {
    console.log("error: ", error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await db.User.findOne({ where: { id: req.params.id } });
    res.status(200).json(user);
  } catch (error) {
    console.log("error: ", error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log("req.body: ", req.body);
    const user = await db.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log("error: ", error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    await db.User.update(req.body, {
      where: { id: req.params.id },
    });
    const user = await db.User.findOne({ where: { id: req.params.id } });
    res.status(200).json(user);
  } catch (error) {
    console.log("error: ", error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await db.User.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;
