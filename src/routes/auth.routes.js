import { Router } from "express";
import { login, me } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/login", login);
router.get("/me", requireAuth, me);

export default router;
// This file defines the authentication routes for the application. It includes a POST route for logging in and a GET route for retrieving the authenticated user's information. The /me route is protected by the requireAuth middleware to ensure that only authenticated users can access it.