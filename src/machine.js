const extendTrafficMachine = require("./machineFactory");
const TrafficState = require("./types");

const onEnterSlowDown = async (ctx) => {
  console.log(ctx);

  return ctx;
};

const onEnterDoNotMove = async (ctx) => {
  console.log(ctx);

  return ctx;
};

const onEnterPrepare = async (ctx) => {
  console.log(ctx);

  return ctx;
};

const onEnterMove = async (ctx) => {
  console.log(ctx);

  return ctx;
};

const transitionHandlers = {
  [`onEnter${TrafficState.GO}`]: onEnterMove,
  [`onEnter${TrafficState.STEADY}`]: onEnterSlowDown,
  [`onEnter${TrafficState.STOP}`]: onEnterDoNotMove,
  [`onEnter${TrafficState.FLASHING}`]: onEnterPrepare,
};

const trafficMachine = extendTrafficMachine(transitionHandlers);

module.exports = trafficMachine;
