import express from "express";
import cors from "cors"; // Enable CORS for all routes
import morgan from "morgan"; // HTTP request logger middleware

import authRoutes from "./routes/auth.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());  // Parse JSON bodies
app.use(morgan("dev"));

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);

export default app;


// This file sets up the Express application, including middleware and routes. It is imported by server.js to start the server.