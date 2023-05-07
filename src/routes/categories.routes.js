import express from "express";
import CategoriesService from "../services/categories.service.js";

const router = express.Router();
const service = new CategoriesService();

// Get All Categories
router.get("/", (req, res) => {
  res.json("From categories router");
});

// Get One Category
router.get("/:id", (req, res) => {});

// Create One Category
router.post("/", (req, res) => {});

// Update One Category
router.put("/:id", (req, res) => {});

// Detele One Categorie
router.put("/:id", (req, res) => {});

export default router;
