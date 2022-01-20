import { loadImage, fileExists, processImage } from "../../utils/processing";
import { promises as fs } from "fs";
import sharp from "sharp";

describe("File loader", () => {
  it("should load image file", async () => {
    const testFile = await fs.readFile("./images/full/fjord.jpg");
    const imgFile = await loadImage("fjord.jpg");
    expect(testFile.equals(imgFile)).toEqual(true);
  });

  it("should return an error text if file doesn't exist", async () => {
    let error;
    try {
      await loadImage("ford");
    } catch (err) {
      error = err;
    }
    expect(error).toEqual(new Error("File not found"));
  });
});

describe("File exists", () => {
  it("Should return true if file exists", async () => {
    const exists = await fileExists("./images/full/fjord.jpg");
    expect(exists).toEqual(true);
  });
  it("Should return false if file doesn't exists", async () => {
    const exists = await fileExists("./images/full/ford.jpg");
    expect(exists).toEqual(false);
  });
});

describe("Processor", () => {
  it("should process image file", async () => {
    const originalFilePath = `./images/full/fjord.jpg`;
    const resizedPhotoBuffer = await sharp(originalFilePath)
      .resize(200, 200)
      .jpeg()
      .toBuffer();

    const newFile = await processImage("fjord.jpg", 200, 200);

    expect(resizedPhotoBuffer.equals(newFile)).toEqual(true);
  });
});
