const trafficMachine = require("./machine");
const TrafficState = require("./types");

console.log(TrafficState.GO);

const machine = trafficMachine({ state: TrafficState.GO });

module.exports = machine;
