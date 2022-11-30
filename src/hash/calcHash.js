import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const FILE = new URL("files/fileToCalculateHashFor.txt", import.meta.url);
  const stream = createReadStream(FILE);
  const hash = createHash("sha256");
  stream.on("readable", () => {
    const data = stream.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
