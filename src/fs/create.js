import { writeFile } from "node:fs/promises";
import { URL } from "url";

const create = async () => {
  try {
    const FOLDER = new URL("files/fresh.txt", import.meta.url);
    const content = "I am fresh and young";
    await writeFile(FOLDER, content, { flag: "wx" });
  } catch (error) {
    console.log("FS operation failed");
  }
};

await create();
