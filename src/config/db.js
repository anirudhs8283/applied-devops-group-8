import mongoose from "mongoose";

export async function connectDB(uri) {
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}


// This file contains the function to connect to MongoDB using Mongoose. It is imported by server.js to establish the database connection before starting the server.