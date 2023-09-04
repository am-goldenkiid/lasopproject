const express = require('express')
const { getMos, getCenter, getCohort, getCourse, Receipt, getReceipt, confirmReceipt, getApplicants } = require('../controllers/activities.js')
const checkUser = require('../middleware/checkUser.js')
const router = express.Router();

router.get("/getmos", getMos)
router.get("/getcenter", getCenter)
router.get("/getcohort", getCohort)
router.get("/getcourse", getCourse)
router.post("/receipt/:id", checkUser, Receipt)
router.get("/getreceipt", getReceipt)
router.get("/confirmreceipt/:id", confirmReceipt)
router.get("/getapplicants", getApplicants)

module.exports = router