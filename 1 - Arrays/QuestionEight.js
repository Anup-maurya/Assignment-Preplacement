function findErrorNums(nums) {
    const n = nums.length;
    const countMap = new Map();

    let duplicate, missing;

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (let i = 1; i <= n; i++) {
        if (countMap.has(i)) {
            if (countMap.get(i) === 2) {
                duplicate = i;
            }
        } else {
            missing = i;
        }
    }

    return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result);
