import { createWriteStream } from "node:fs";
import { URL } from "url";
import { stdin } from "process";

const write = async () => {
  const FILE = new URL("files/fileToWrite.txt", import.meta.url);
  const stream = createWriteStream(FILE);
  stdin.on("data", (data) => {
    stream.write(data);
  });
};

await write();
