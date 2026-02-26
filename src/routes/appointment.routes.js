import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/rbac.js";

const router = Router();

router.post("/", requireAuth, allowRoles("clerk"), (req, res) => res.json({ msg: "Create appointment" }));
router.get("/my", requireAuth, allowRoles("doctor"), (req, res) => res.json({ msg: "Doctor appointments" }));

export default router;
