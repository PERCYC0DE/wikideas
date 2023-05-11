import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Get All Users");
});

router.post("/", (req, res) => {
  const data = req.body;
});

export default router;
