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
// This file defines the Mongoose schema and model for patients. It includes fields for full name, date of birth, phone number, emergency contact, vitals, and doctor notes. This model is used in the patient controller to manage patient data in MongoDB.