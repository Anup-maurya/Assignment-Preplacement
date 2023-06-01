function minimumScore(nums, k) {
    let minNum = Infinity;
    let maxNum = -Infinity;
  
    for (let num of nums) {
      minNum = Math.min(minNum, num);
      maxNum = Math.max(maxNum, num);
    }
  
    const difference = maxNum - minNum;
  
    if (difference <= 2 * k) {
      return 0;
    } else {
      return difference - 2 * k;
    }
  }
  

  const nums = [1];
  const k = 0;
  const result = minimumScore(nums, k);
  console.log(result); 