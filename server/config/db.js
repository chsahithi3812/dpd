const mongoose = require("mongoose");
require("dotenv").config();

exports.mongoConnection = async () => {
  try {
    mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PW}@cluster0.iacdb.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("db connected");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
