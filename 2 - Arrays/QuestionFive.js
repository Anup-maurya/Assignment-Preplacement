function maximumProduct(nums) {
    nums.sort((a, b) => a - b); 
    const length = nums.length;
    const product1 = nums[length - 1] * nums[length - 2] * nums[length - 3]; 
    const product2 = nums[0] * nums[1] * nums[length - 1]; 
    return Math.max(product1, product2);
  }
  
  
  const nums = [1, 2, 3];
  const result = maximumProduct(nums);
  console.log(result); // Output: 6
  