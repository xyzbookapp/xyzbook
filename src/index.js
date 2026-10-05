const {
  createMarket,
  getMarket,
  listMarkets
} = require("./market");

const market = createMarket(
  "cricket-001",
  "Will India win the match?"
);

console.log("Market created:");
console.log(market);

console.log("Get market:");
console.log(getMarket("cricket-001"));

console.log("All markets:");
console.log(listMarkets());