import express from "express";
import ArticlesService from "../services/articles.service.js";

const router = express.Router();
const service = new ArticlesService();

// Get All Articles
router.get("/", (req, res) => {
  res.json("From articles router");
});

// Get One Article
router.get("/:id", (req, res) => {});

// Create One Article
router.post("/", (req, res) => {});

// Update One Article
router.put("/:id", (req, res) => {});

// Detele One Article
router.put("/:id", (req, res) => {});

export default router;
