import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((e) => {
      throw Error(e.message);
    });
};

export default connectDB;
