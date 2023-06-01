function maxCandies(candyType) {
    const uniqueCandies = new Set();
    for (let i = 0; i < candyType.length; i++) {
      uniqueCandies.add(candyType[i]);
    }
    const maxCandyTypes = Math.min(uniqueCandies.size, candyType.length / 2);
    return maxCandyTypes;
  }

  const candyType = [1, 1, 2, 2, 3, 3];
  const result = maxCandies(candyType);
  console.log(result); 
  