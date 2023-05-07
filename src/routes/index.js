import express from "express";

import articlesRoutes from "./articles.routes.js";
import categoriesRoutes from "./categories.routes.js";
import tagsRoutes from "./tags.routes.js";
import userRoutes from "./users.routes.js";

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/articles", articlesRoutes);
  router.use("/categories", categoriesRoutes);
  router.use("/tags", tagsRoutes);
  router.use("/users", userRoutes);
}

export default routerApi;
