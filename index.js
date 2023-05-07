import express from "express";
import routerApi from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT_SERVER || 4000;

// Routes Function
routerApi(app);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
