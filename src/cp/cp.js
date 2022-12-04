import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
    const FILE = new URL("files/script.js", import.meta.url);
    fork(FILE,args);
};

spawnChildProcess(['1','2','3']);