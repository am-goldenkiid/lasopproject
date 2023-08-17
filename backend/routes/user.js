import express from 'express';
import { signup, login, myProfile, getProspectus } from '../controllers/user.js';
import protect from "./../middleware/protect.js"

const router = express.Router();

router.post("/register", signup)
router.post("/login", login)
router.get("/profile", protect, myProfile)
router.post("/prospectus", getProspectus)

export default router