import {logger }from "./logger.mjs";
import path from "path";
import { fileURLToPath } from "url";

const { argv } = process;
logger.log(path.parse(fileURLToPath(import.meta.url)));
logger.log(argv[0]);
