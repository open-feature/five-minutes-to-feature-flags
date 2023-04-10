import express from "express";
import Router from "express-promise-router";
import cowsay from "cowsay";

const app = express();

app.use(function (_, res, next) {
  res.setHeader("content-type", "text/plain");
  next();
});

const routes = Router();
app.use(routes);

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
