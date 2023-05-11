import express from "express";
const router = express.Router();
import {
  getAllArticles,
  getOneArticle,
  createOneArticle,
  updateOneArticle,
  deleteOneArticle,
} from "../controllers/articles.controller.js";

router.get("/", getAllArticles);
router.get("/:id", getOneArticle);
router.post("/", createOneArticle);
router.put("/:id", updateOneArticle);
router.delete("/:id", deleteOneArticle);

export default router;
