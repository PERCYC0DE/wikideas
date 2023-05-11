import { Article } from "../models/index.js";

const getAllArticles = (req, res) => res.json("All articles");

const getOneArticle = (req, res) => {
  res.json("One articles");
};

const createOneArticle = (req, res) => {
  const data = req.body;
  res.json(data);
};

const updateOneArticle = (req, res) => {
  res.json("Updating One articles");
};

const deleteOneArticle = (req, res) => {
  res.json("Deleting One articles");
};

export {
  getAllArticles,
  getOneArticle,
  createOneArticle,
  updateOneArticle,
  deleteOneArticle,
};
