import { rm } from "node:fs/promises";
import { URL } from "url";

const remove = async () => {
  try {
    const FILE_TO_DELETE = new URL("files/fileToRemove.txt", import.meta.url);
    await rm(FILE_TO_DELETE);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await remove();
