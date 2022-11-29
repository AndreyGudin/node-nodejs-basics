import { env } from "node:process";

const parseEnv = () => {
  const envs = env;
  for (let key in envs) {
    if (key.split("_")[0] === "RSS") console.log(`${key}=${envs[key]}`);
  }
};

parseEnv();
