import logger from "./logger.mjs";
import path from "path";
import { fileURLToPath } from "url";

// logger.log("debug", path.parse(fileURLToPath(import.meta.url)));
console.log("from module", process.env.LEVEL);
logger.info(logger.level);


