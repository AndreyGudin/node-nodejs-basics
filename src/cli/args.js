import { argv } from "node:process";

const parseArgs = () => {
  const args = argv;
  args.forEach((value, i, array) => {
    let variableSymbol = value.substring(0, 2);
    let variable = value.substring(2);
    if (variableSymbol === "--")
      console.log(`${variable} is ${array[i + 1]}`);
  });
};

parseArgs();
