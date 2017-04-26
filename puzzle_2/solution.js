module.exports = function (array) {
  // let S[k] be the sum of the first k elements of A, S[0]=0 and S[i+1]=S[i]+A[i]
  // the sum of A[x:y] = S[y]-S[x].
  let S = [0];
  for (let i = 0; i < array.length; i += 1) {
    S[i + 1] = S[i] + array[i];
  }

  const hash = {};
  for (let i = 0; i < S.length; i += 1) {
    if (hash[S[i]]) hash[S[i]] += 1;
    else hash[S[i]] = 1;
  }

  let count = 0;
  for (const key in hash) {
    count += (hash[key] * (hash[key] - 1)) / 2;
  }

  console.log('Count:', count);
  return count;
};

// module.exports([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);