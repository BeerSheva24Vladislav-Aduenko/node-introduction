import logger from "./logger.mjs";
import fs from "node:fs";
const data = fs.readFileSync("index.mjs", "utf-8");
console.log(data);

fs.writeFileSync('./file.txt', ["kuku", "kukureku", "Hello World!"].join('\n'), "utf-8")