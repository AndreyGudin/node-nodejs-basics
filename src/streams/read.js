import { createReadStream } from "node:fs";
import { URL } from "url";
import { stdout } from "process";

const read = async () => {
    const FILE = new URL("files/fileToRead.txt", import.meta.url);
    const stream = createReadStream(FILE);
    let data = "";
    stream.on("data", (chunk) => (data += chunk));
    stream.on("end", () => stdout.write(data));
};

await read();