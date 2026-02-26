import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  patientId: mongoose.Schema.Types.ObjectId,
  doctorId: mongoose.Schema.Types.ObjectId,
  scheduledAt: Date,
  reason: String,
  status: { type: String, default: "scheduled" },
  createdBy: mongoose.Schema.Types.ObjectId
}, { timestamps: true });

export default mongoose.model("Appointment", AppointmentSchema);
// This file defines the Mongoose schema and model for appointments. It includes fields for patient and doctor references, scheduled time, reason, status, and who created the appointment. This model is used in the appointment controller to manage appointment data in MongoDB.