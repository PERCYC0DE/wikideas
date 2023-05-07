import express from "express";
import UsersService from "../services/users.service.js";

const router = express.Router();
const service = new UsersService();

// Get All Users
router.get("/", (req, res) => {
  res.json("From articles router");
});

// Get One User
router.get("/:id", (req, res) => {});

// Create One User
router.post("/", (req, res) => {});

// Update One User
router.put("/:id", (req, res) => {});

// Detele One User
router.put("/:id", (req, res) => {});

export default router;
