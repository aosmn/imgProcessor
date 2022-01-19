import { promises as fs } from "fs";
import fileSystem from "fs";
import sharp from "sharp";
import { Buffer } from "buffer";

export const loadImage = (fileName: string) => {
  const exists = fileExists(`./images/full/${fileName}`);
  if (exists) {
    try {
      const imgFile = fileSystem.readFileSync(`./images/full/${fileName}`);
      return imgFile;
    } catch (err) {
      throw new Error("File Error");
    }
  } else {
    throw new Error("File not found");
  }
};

export const loadFilePath = (filePath: string) => {
  const exists = fileExists(filePath);
  if (exists) {
    try {
      const imgFile = fileSystem.readFileSync(filePath);
      return imgFile;
    } catch (err) {
      throw new Error("File Error");
    }
  } else {
    throw new Error("File not found");
  }
};

export const fileExists = (filePath: string) => {
  try {
    const fileExists = fileSystem.existsSync(filePath);
    if (fileExists) return true;
    return false;
  } catch (err) {
    throw new Error("File Error");
  }
};

export const saveFile = async (content: Buffer, filePath: string) => {
  const myFile = await fs.writeFile(filePath, content);
  return myFile;
};

export const processImage = async (
  fileName: string,
  width: number,
  height: number
) => {
  const originalFP = `./images/full/${fileName}`;
  if (fileExists(originalFP)) {
    const resizedPhotoBuffer = await sharp(originalFP)
      .resize(width, height)
      .jpeg()
      .toBuffer();
    const filePath = `./images/${fileName.replace(
      ".jpg",
      ""
    )}-${width}x${height}.jpg`;
    if (!fileExists(filePath)) {
      return saveFile(resizedPhotoBuffer, filePath);
    } else {
      return loadFilePath(filePath);
    }
  } else {
    throw new Error("File not found");
  }
};
