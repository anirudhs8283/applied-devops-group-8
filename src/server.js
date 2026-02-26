import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 3000;

async function start() {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`API running on http://localhost:${port}`));
}

start();
// This file connects to the database and starts the Express server. It imports the app configuration from app.js and is the main entry point for the application.