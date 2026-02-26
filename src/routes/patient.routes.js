import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/rbac.js";

const router = Router();

router.post("/", requireAuth, allowRoles("clerk"), (req, res) => res.json({ msg: "Create patient" }));
router.get("/:id", requireAuth, allowRoles("clerk", "doctor", "nurse"), (req, res) => res.json({ msg: "Get patient" }));

export default router;
// This file defines the routes for managing patients. It includes a POST route for creating a patient, which is protected by both the requireAuth and allowRoles middleware to ensure that only authenticated users with the "clerk" role can access it. It also includes a GET route for retrieving patient information, which is protected to allow authenticated users with the "clerk", "doctor", or "nurse" roles to access it. The actual logic for handling these routes would be implemented in the controller functions, which are currently placeholders in this code snippet.