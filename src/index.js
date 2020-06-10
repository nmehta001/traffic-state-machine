const trafficMachine = require("./machine");
const TrafficState = require("./types");

const machine = trafficMachine({ state: TrafficState.GO });

module.exports = machine;
