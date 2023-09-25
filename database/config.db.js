import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log({ error });
    throw new Error("Error connecting to MongoDB");
  }
};
