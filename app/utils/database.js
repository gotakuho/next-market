import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cyber:cyber@cluster0.8ctuedc.mongodb.net/nextAppDataBase?appName=Cluster0"
    // "mongodb://localhost:27017/food"
    );

    console.log("Success: Connected to MongoDB");
  } catch (error) {
    console.log("Failure: Unconnected to MongoDB", error);
    throw new Error("DB connection failed");
  }
};

export default connectDB;