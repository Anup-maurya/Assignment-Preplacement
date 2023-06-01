function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }

    return [];  
}

const nums = [2, 7, 11, 15];
const target = 9;

const indices = twoSum(nums, target);

if (indices.length > 0) {
    console.log(`Indices: [${indices[0]}, ${indices[1]}]`);
} else {
    console.log("No solution found.");
}
