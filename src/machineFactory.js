const createMachineFactory = require("@f5io/machine");
const TrafficState = require("./types");

const createMachine = (transitions, options = {}) => (handlers) =>
  createMachineFactory({
    transitions,
    handlers,
    stateKey: "state",
    ...options,
  });

const trafficTransitions = {
  slow_down: { from: TrafficState.GO, to: TrafficState.STEADY },
  do_not_move: { from: TrafficState.STEADY, to: TrafficState.STOP },
  prepare: { from: TrafficState.STOP, to: TrafficState.FLASHING },
  move: { from: TrafficState.FLASHING, to: TrafficState.GO },
};

const extendTrafficMachine = createMachine(trafficTransitions);

module.exports = extendTrafficMachine;
