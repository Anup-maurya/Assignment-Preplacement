function findLHS(nums) {
    const frequencyMap = new Map();
    for (let num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    let maxLen = 0;
    for (let [num, frequency] of frequencyMap) {
      if (frequencyMap.has(num + 1)) {
        const currentLen = frequency + frequencyMap.get(num + 1);
        maxLen = Math.max(maxLen, currentLen);
      }
    }
  
    return maxLen;
  }
  

  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = findLHS(nums);
  console.log(result); 