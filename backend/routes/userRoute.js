const express = require("express");
const router = express.Router();
const {
  getAll,
  createUser,
  deleteUser,
  getUser,
  updataUser,
} = require("../controllers/userController");

router.get("/", getAll);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updataUser);
module.exports = router;
