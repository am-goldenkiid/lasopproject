const express = require('express')
const { signup, login, myProfile, getProspectus, studentCounter, courseCounter } = require( '../controllers/user.js')


const router = express.Router();

router.post("/register", signup)
router.post("/login", login)
router.get("/profile",  myProfile)
router.post("/prospectus", getProspectus)
router.get('/students', studentCounter)
router.get('/courses', courseCounter)

module.exports = router