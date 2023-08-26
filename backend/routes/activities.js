import express from 'express';
import { getMos, getCenter, getCohort, getCourse, Receipt } from '../controllers/activities.js';
const router = express.Router();

router.get("/getmos", getMos)
router.get("/getcenter", getCenter)
router.get("/getcohort", getCohort)
router.get("/getcourse", getCourse)
router.post("/receipt", Receipt)

export default router