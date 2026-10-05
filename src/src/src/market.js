const markets = new Map();

function createMarket(id, question) {
  if (!id || !question) {
    throw new Error("Market id and question are required");
  }

  if (markets.has(id)) {
    throw new Error("Market already exists");
  }

  const market = {
    id,
    question,
    outcomes: ["YES", "NO"],
    status: "OPEN",
    createdAt: Date.now()
  };

  markets.set(id, market);
  return market;
}

function getMarket(id) {
  return markets.get(id) || null;
}

function closeMarket(id) {
  const market = markets.get(id);

  if (!market) {
    throw new Error("Market not found");
  }

  market.status = "CLOSED";
  return market;
}

module.exports = {
  createMarket,
  getMarket,
  closeMarket
};