const markets = new Map();

function createMarket(id, question) {
  const market = {
    id,
    question,
    status: "OPEN",
    outcomes: ["YES", "NO"],
    createdAt: Date.now()
  };

  markets.set(id, market);
  return market;
}

function getMarket(id) {
  return markets.get(id);
}

function listMarkets() {
  return Array.from(markets.values());
}

module.exports = {
  createMarket,
  getMarket,
  listMarkets
};