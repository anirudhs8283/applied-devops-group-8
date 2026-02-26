import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["clerk", "doctor", "nurse"] }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
// This file defines the Mongoose schema and model for users. It includes fields for name, email, password hash, and role. The email field is unique to prevent duplicate accounts. This model is used in the authentication controller to manage user data in MongoDB.