import express, { Response, Request } from "express";
import { processImage } from "./utils/processing";

export const imagesRouter = express.Router();

imagesRouter.get("/", (req: Request, res: Response) => {
  const { filename, width, height } = req.query;
  if (filename && width && height) {
    try {
      processImage(
        filename as string,
        parseInt(width as string, 10),
        parseInt(height as string, 10)
      )
        .then(() => {
          res.status(200);
          res.set("Content-Type", "image/jpeg");
          res.sendFile(
            `images/${(filename as string).replace(
              ".jpg",
              ""
            )}-${width}x${height}.jpg`,
            { root: __dirname.replace("/dist", "") }
          );
        })
        .catch((err) => {
          console.error(err.message);
          res.status(404);
          res.send(err.message);
        });
    } catch (error) {
      console.error(error);
      res.status(400);
      res.send("An error occurred");
    }
  } else {
    res.status(400);
    res.send("Missing parameter");
  }
});
