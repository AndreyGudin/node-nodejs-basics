import { createReadStream,createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { URL } from "url";

const decompress = async () => {
    const FILE = new URL("files/fileToCompress.txt", import.meta.url);
    const ARCHIVE = new URL("files/archive.gz", import.meta.url);
    const ungzip = createGunzip();
    const rstream = createReadStream(ARCHIVE);
    const wstream = createWriteStream(FILE);
    rstream.pipe(ungzip).pipe(wstream); 
};

await decompress();