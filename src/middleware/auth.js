import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Missing token" });

  const payload = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(payload.sub);
  req.user = user;
  next();
}
// This middleware checks for a JWT token in the Authorization header, verifies it, and attaches the user information to the request object. It can be used to protect routes that require authentication.