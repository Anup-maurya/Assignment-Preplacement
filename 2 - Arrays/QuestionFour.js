function canPlaceFlowers(flowerbed, n) {
    const length = flowerbed.length;
    let count = 0;
  
    for (let i = 0; i < length && count < n; i++) {
      if (
        flowerbed[i] === 0 &&
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === length - 1 || flowerbed[i + 1] === 0)
      ) {
        flowerbed[i] = 1;
        count++;
      }
    }
  
    return count === n;
  }
  
 
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const result = canPlaceFlowers(flowerbed, n);
  console.log(result); 
  