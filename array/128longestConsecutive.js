function longestConsecutive(nums) {
    const hashSet = new Set(nums);
    // Array might be empty
    let res = 0;
    // Only iterate through unique numbers
    for(let num of hashSet) {
        // The start of a sequence doesn't have a previous
        if (!hashSet.has(num - 1)) {
            let consecCount = 1;
            while (hashSet.has(num + consecCount)) {
                consecCount++;
            }
            // Compare and save the longest sequence
            res = Math.max(res, consecCount)
        }
    }
    return res;
}