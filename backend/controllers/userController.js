const user = require("../models/userModel");
exports.getAll = async (req, res) => {
  try {
    const details = await user.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.getUser = async (req, res) => {
  try {
    const details = await user.findOne({id:req.params.id});
    res.status(200).json(details);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { id } = req.body;
    const details = await user.findOne({ id: id });
    if (details) {
      res.status(400).json({ message: "Already exists" });
    }
    const users = await user.create(req.body);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const details = await user.findOne({ id: id });
    if (!details) {
      res.status(400).json({ message: "Not existed" });
    }
    const dele = await user.deleteOne({ id: id });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.updataUser = async (req, res) => {
  try {
    const id = req.params.id;
    const details = await user.findOne({ id: id });
    if (!details) {
      res.status(400).json({ message: "Not existed" });
    }
    const updated = await user.updateOne({ id: id},{$set:req.body} );
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
