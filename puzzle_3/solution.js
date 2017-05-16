function max(a, b) {
  return a >= b ? a : b;
}

module.exports = function (predictedStockPrices) {
  const n = predictedStockPrices.length;
  const bestSellPrices = new Array(n);

  bestSellPrices[n - 1] = 0;
  for (let i = n - 2; i >= 0; i -= 1) {
    bestSellPrices[i] = max(bestSellPrices[i + 1], predictedStockPrices[i]);
  }

  let benefit = 0;
  for (let i = 0; i < n; i += 1) {
    if (predictedStockPrices[i] < bestSellPrices[i]) {
      benefit += bestSellPrices[i] - predictedStockPrices[i];
    }
  }

  return benefit;
};
