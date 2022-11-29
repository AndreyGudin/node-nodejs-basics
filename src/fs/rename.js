import { URL } from "url";
import { rename as renameFile } from "node:fs/promises";

const rename = async () => {
  try {
    const wrongFilename = new URL("files/wrongFilename.txt", import.meta.url);
    const properFilename = new URL("files/properFilename.txt", import.meta.url);
    await renameFile(wrongFilename, properFilename);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await rename();
