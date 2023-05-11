import express from "express";

import articlesRouter from "./src/routes/articles.routes.js";
import categoriesRouter from "./src/routes/categories.routes.js";
import tagsRouter from "./src/routes/tags.routes.js";
import usersRouter from "./src/routes/users.routes.js";

import database from "./src/config/database.js";

// Execute App
const app = express();

app.use(express.json());

// Connect to Database
try {
  await database.authenticate();
  // database.sync();
  console.info("Connected to database");
} catch (err) {
  console.error(err);
}

// Routes Definition
app.use("/articles", articlesRouter);
app.use("/categories", categoriesRouter);
app.use("/tags", tagsRouter);
app.use("/users", usersRouter);

// Configurations
const PORT = process.env.PORT_SERVER || 4000;

// Run server
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
