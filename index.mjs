
import logger from './logger.mjs';
import DistributionMessageLevels from './DistributionMessageLevels.mjs';
import FilterLogMessages from './FilterLogMessages.mjs';
const filter1 = new FilterLogMessages(logger,["hello"], "debug");
const filter2 = new FilterLogMessages(logger,["hello", "kuku"], "debug");
const distribution = new DistributionMessageLevels(logger);
logger.log("debug", "Hello world");
logger.log("debug", "kuku");
logger.log('info', "kukureku");
console.log(distribution.getDistribution());
console.log(filter2.getMessage());