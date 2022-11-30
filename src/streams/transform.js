import { createWriteStream } from "node:fs";
import { Transform } from "node:stream";
import { URL } from "url";
import { stdin,stdout } from "process";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback){
            callback(null, chunk.toString().split("").reverse().join(""));
        }
    });
    stdin.pipe(reverse).pipe(stdout);
};

await transform();