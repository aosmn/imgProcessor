import express from "express";
import { imagesRouter } from "./routes";

export const app = express();

app.use("/api/images", imagesRouter);

app.listen("3000", () => {
  console.log("app running");
});
