import mongoose from "mongoose";

const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.MONGODB_URL)
      console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
      console.log(`Error connection to MongoDB ${error.message}`);
      process.exit(1);
  }
}

export default connectDB;