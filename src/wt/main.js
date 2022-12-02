import {cpus} from "node:os";
import { Worker } from "node:worker_threads"

const createWorker = (data) =>{
    return new Promise((resolve, reject) =>{
        const worker = new Worker("./worker.js", {workerData: data} );
        worker.on("message", resolve);
        worker.on("error", () => reject({status: "error", data: null}));
        worker.on("exit", (code) => {
            if (code !== 0) reject({status: "error", data: null});
        });
    })
}

const performCalculations = async () => {
    const cpusAmount = cpus().length;
    const n = 10;
    const result = []
    for (let i = n; i <= n + cpusAmount; i++) {
        let fib = await createWorker(i);
        result.push({...fib});
    }
    console.log(result);
};

await performCalculations();