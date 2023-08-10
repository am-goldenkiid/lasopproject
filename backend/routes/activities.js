import express from 'express';
import { getMos, getCenter, getCohort, getCourse } from '../controllers/activities.js';
const router = express.Router();

router.get("/getmos", getMos)
router.get("/getcenter", getCenter)
router.get("/getcohort", getCohort)
router.get("/getcourse", getCourse)

export default router