const express = require('express')
const { signup, login, myProfile, getProspectus } = require( '../controllers/user.js')


const router = express.Router();

router.post("/register", signup)
router.post("/login", login)
router.get("/profile",  myProfile)
router.post("/prospectus", getProspectus)

module.exports = router