import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/rbac.js";

const router = Router();

router.post("/", requireAuth, allowRoles("clerk"), (req, res) => res.json({ msg: "Create patient" }));
router.get("/:id", requireAuth, allowRoles("clerk", "doctor", "nurse"), (req, res) => res.json({ msg: "Get patient" }));

export default router;
