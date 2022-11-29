import { open } from "node:fs/promises";
import { URL } from "url";

const read = async () => {
  try {
    const FILE = new URL("files/fileToRead.txt", import.meta.url);
    const file = await open(FILE);
    let data = "";
    const stream = file.createReadStream();
    stream.on("data", (chunk) => (data += chunk));
    stream.on("end", () => console.log(data));
  } catch (error) {
    console.log("FS operation failed");
  }
};

await read();
