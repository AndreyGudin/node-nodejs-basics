import { createReadStream,createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { URL } from "url";

const compress = async () => {
    const FILE = new URL("files/fileToCompress.txt", import.meta.url);
    const ARCHIVE = new URL("files/archive.gz", import.meta.url);
    const gzip = createGzip();
    const rstream = createReadStream(FILE);
    const wstream = createWriteStream(ARCHIVE);
    rstream.pipe(gzip).pipe(wstream);

};

await compress();