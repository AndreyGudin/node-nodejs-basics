import { workerData, parentPort} from "node:worker_threads";
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (typeof workerData === "number"){
        parentPort.postMessage({status: "resolved", data:nthFibonacci(workerData)});
    } else {
        parentPort.postMessage({status: "error", data:null});
    }
};

sendResult();