module.exports = function (array) {
  // let S[k] be the sum of the first k elements of A, S[0]=0 and S[i+1]=S[i]+A[i]
  // the sum of A[x:y] = S[y]-S[x].
  const S = [0];
  for (let i = 0; i < array.length; i += 1) {
    S[i + 1] = S[i] + array[i];
  }

  const hash = {};
  for (let i = 0; i < S.length; i += 1) {
    if (hash[S[i]]) hash[S[i]] += 1;
    else hash[S[i]] = 1;
  }

  let count = 0;
  Object.values(hash).forEach((v) => {
    count += (v * (v - 1)) / 2;
  });

  return count;
};
