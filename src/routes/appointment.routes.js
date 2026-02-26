import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/rbac.js";

const router = Router();

router.post("/", requireAuth, allowRoles("clerk"), (req, res) => res.json({ msg: "Create appointment" }));
router.get("/my", requireAuth, allowRoles("doctor"), (req, res) => res.json({ msg: "Doctor appointments" }));

export default router;
// This file defines the routes for managing appointments. It includes a POST route for creating an appointment, which is protected by both the requireAuth and allowRoles middleware to ensure that only authenticated users with the "clerk" role can access it. It also includes a GET route for doctors to view their appointments, which is similarly protected to allow only authenticated users with the "doctor" role. The actual logic for handling these routes would be implemented in the controller functions, which are currently placeholders in this code snippet.