const test = require('node:test');
const assert = require('node:assert');
const { createMarket, getMarket, listMarkets } = require('./market');

test('Market functions', async (t) => {
  await t.test('createMarket creates a market with correct structure', () => {
    const market = createMarket('test-001', 'Will India win?');
    
    assert.strictEqual(market.id, 'test-001');
    assert.strictEqual(market.question, 'Will India win?');
    assert.strictEqual(market.status, 'OPEN');
    assert.deepStrictEqual(market.outcomes, ['YES', 'NO']);
    assert.strictEqual(typeof market.createdAt, 'number');
    assert.ok(market.createdAt > 0);
  });

  await t.test('getMarket retrieves a created market', () => {
    const market = createMarket('test-002', 'Will crypto go up?');
    const retrieved = getMarket('test-002');
    
    assert.strictEqual(retrieved.id, 'test-002');
    assert.strictEqual(retrieved.question, 'Will crypto go up?');
  });

  await t.test('getMarket returns undefined for non-existent market', () => {
    const retrieved = getMarket('non-existent-id');
    assert.strictEqual(retrieved, undefined);
  });

  await t.test('listMarkets returns array of all markets', () => {
    const market1 = createMarket('list-test-1', 'Question 1');
    const market2 = createMarket('list-test-2', 'Question 2');
    
    const markets = listMarkets();
    
    assert.ok(Array.isArray(markets));
    assert.ok(markets.length >= 2);
    
    const ids = markets.map(m => m.id);
    assert.ok(ids.includes('list-test-1'));
    assert.ok(ids.includes('list-test-2'));
  });

  await t.test('multiple markets can be created and retrieved', () => {
    const m1 = createMarket('cricket-ipl', 'Which team wins IPL?');
    const m2 = createMarket('sports-wc', 'Which team wins World Cup?');
    
    assert.strictEqual(getMarket('cricket-ipl').question, 'Which team wins IPL?');
    assert.strictEqual(getMarket('sports-wc').question, 'Which team wins World Cup?');
    
    const allMarkets = listMarkets();
    assert.ok(allMarkets.length >= 2);
  });
});
