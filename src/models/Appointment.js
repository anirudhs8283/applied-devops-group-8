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
