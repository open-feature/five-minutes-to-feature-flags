import express from "express";
import Router from "express-promise-router";
import cowsay from "cowsay";
import { OpenFeature } from "@openfeature/server-sdk";

const app = express();
const routes = Router();
app.use((_, res, next) => {
  res.setHeader("content-type", "text/plain");
  next();
}, routes);

const featureFlags = OpenFeature.getClient();

routes.get("/", async (_, res) => {
  const withCow = await featureFlags.getBooleanValue("with-cows", false);
  if (withCow) {
    res.send(cowsay.say({ text: "Hello, world!" }));
  } else {
    res.send("Hello, world!");
  }
});

app.listen(3333, () => {
  console.log("Server running at http://localhost:3333");
});
