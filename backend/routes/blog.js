import express from 'express';
import { createArticle, getArticles, getBlogImages } from '../controllers/blog.js';
import protect from "./../middleware/protect.js"

const router = express.Router();

router.post("/create-article", protect, createArticle)
router.get("/getarticles", protect, getArticles)
router.get("/blogimages/:id", getBlogImages)



export default router