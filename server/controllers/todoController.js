const mongoose = require("mongoose");
const storeModel = require("../models/todo");

const add = async (req, res) => {
  const { key } = req.body;
  if (!key) {
    return res.status(400).json({ Error: "Empty fields cannot be stored" });
  }
  const newRecord = await storeModel.create({
    key,
    value,
    createdBy: req.user,
  });

  if (newRecord) {
    res.status(201).json({
      _id: newRecord._id,
      key: newRecord.key,
    });
  } else {
    res.status(400).json({ Error: "Failed to store a record" });
  }
};

const get = async (req, res) => {
  const key = req.params.key;
  try {
    const pair = await storeModel.find({ key });
    if (pair) {
      return res.status(200).json({ Data: pair, name: req.user.name });
    } else {
      return res.status(400).json({ Error: "Not Found" });
    }
  } catch (err) {
    res.status(400).json({ Error: err });
  }
};

const deleteItem = async (req, res) => {
  const parameter = req.params.key;
  try {
    const deletedStore = await storeModel.findOneAndDelete({
      key: parameter,
    });
    if (deletedStore) {
      return res.status(200).json({
        Data: "Successfully deleted",
      });
    } else {
      return res.status(400).json({ Error: "Failed to Delete" });
    }
  } catch (err) {
    res.status(400).json({ Error: err });
  }
};

module.exports = {
  add,
  get,
  deleteItem,
};
