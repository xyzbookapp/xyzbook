const markets = new Map();

function createMarket(id, question) {
  markets.set(id, {
    id,
    question,
    status: "OPEN",
    outcomes: ["YES", "NO"],
    createdAt: Date.now()
  });
  return markets.get(id);
}

function getMarket(id) {
  return markets.get(id);
}

module.exports = {
  createMarket,
  getMarket
};