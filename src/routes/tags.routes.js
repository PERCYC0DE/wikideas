import express from "express";
import TagsService from "../services/tags.service.js";

const router = express.Router();
const service = new TagsService();

// Get All Tags
router.get("/", (req, res) => {
  res.json("From articles router");
});

// Get One Tag
router.get("/:id", (req, res) => {});

// Create One Tag
router.post("/", (req, res) => {});

// Update One Tag
router.put("/:id", (req, res) => {});

// Detele One Tag
router.put("/:id", (req, res) => {});

export default router;
