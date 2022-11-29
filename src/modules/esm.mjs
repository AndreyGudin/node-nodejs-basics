import { sep } from "node:path";
import { release, version } from "node:os";
import { createServer } from "node:http";
import url from "url";
import "./files/c.js";

const random = Math.random();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let unknownObject;

if (random > 0.5) {
  unknownObject = await import("./files/a.json", { assert: { type: "json" } });
} else {
  unknownObject = await import("./files/b.json", { assert: { type: "json" } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
