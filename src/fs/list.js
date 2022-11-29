import { readdir } from "node:fs/promises";
import { URL } from "url";

const list = async () => {
  try {
    const FOLDER = new URL("files", import.meta.url);
    const files = await readdir(FOLDER);
    for (const file of files) console.log(file);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await list();
