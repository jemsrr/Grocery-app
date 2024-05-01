import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STR);
    console.log("db connect");
  } catch (error) {
    console.log(error);
  }
};

export default connection;
