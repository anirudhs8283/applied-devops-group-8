import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  fullName: String,
  dob: Date,
  phone: String,
  emergencyContact: String,
  vitals: Array,
  doctorNotes: Array
}, { timestamps: true });

export default mongoose.model("Patient", PatientSchema);
