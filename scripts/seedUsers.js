import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcrypt";
import { connectDB } from "../src/config/db.js";
import User from "../src/models/User.js";

async function run() {
  await connectDB(process.env.MONGO_URI);

  const users = [
    { name: "Clerk", email: "clerk1@hms.com", role: "clerk", password: "Clerk@123" },
    { name: "Doctor", email: "doctor1@hms.com", role: "doctor", password: "Doctor@123" },
    { name: "Nurse", email: "nurse1@hms.com", role: "nurse", password: "Nurse@123" }
  ];

  for (const u of users) {
    const hash = await bcrypt.hash(u.password, 10);
    await User.create({ ...u, passwordHash: hash });
  }

  console.log("Seed complete");
  process.exit(0);
}

run();
