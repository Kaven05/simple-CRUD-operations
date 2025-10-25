const express = require("express");
const router = express.Router();
const {
  getAll,
  createUser,
  deleteUser,
  getUser,
} = require("../controllers/userController");

router.get("/", getAll);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
