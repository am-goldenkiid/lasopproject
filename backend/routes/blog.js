const express = require('express')
const { createArticle, getArticles, getBlogImages } = require('../controllers/blog.js')
const protect = require("./../middleware/protect.js")

const router = express.Router();

router.post("/create-article", protect, createArticle)
router.get("/getarticles",  getArticles)
router.get("/blogimages/:id", getBlogImages)



module.exports = router