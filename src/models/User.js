import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["clerk", "doctor", "nurse"] }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
