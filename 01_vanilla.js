import express from "express";

const app = express();
const routes = express.Router();
app.use((_, res, next) => {
  res.setHeader("content-type", "text/plain");
  next();
}, routes);

routes.get("/", async (_, res) => {
  res.send("Hello, world!");
});

app.listen(3333, () => {
  console.log("Server running at http://localhost:3333");
});
