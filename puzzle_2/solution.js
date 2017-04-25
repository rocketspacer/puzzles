module.exports = function (array) {

  // let S[k] be the sum of the first k elements of A, S[0]=A[0] and S[i+1]=S[i]+A[i]
  // the sum of A[x:y] = S[y]-S[x].
  const S = [0];
  for (let i = 1; i < array.length; i += 1) {
    S[i] = S[i - 1] + array[i];
  }

  let count = 0;
  const hash = {};
  for (let i = 0; i < array.length; i += 1) {
    if (hash[S[i]] !== undefined) hash[S[i]] += 1;
    else hash[S[i]] = 0;

    count += hash[S[i]];
  }

  return count;
};
