const express = require("express");
const router = express.Router();
const {
  getAll,
  createUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", getAll);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
