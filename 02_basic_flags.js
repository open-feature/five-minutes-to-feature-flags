import express from "express";
import cowsay from "cowsay";

const app = express();
const routes = express.Router();
app.use((_, res, next) => {
  res.setHeader("content-type", "text/plain");
  next();
}, routes);

routes.get("/", async (_, res) => {
  // set this to true to test our new
  // cow-based greeting system
  const withCow = false;
  if (withCow) {
    res.send(cowsay.say({ text: "Hello, world!" }));
  } else {
    res.send("Hello, world!");
  }
});

app.listen(3333, () => {
  console.log("Server running at http://localhost:3333");
});
