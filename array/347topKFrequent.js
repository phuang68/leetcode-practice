// Hash map + sort: O(nlogn)
const topKFrequent = (nums, k) => {
    const numFreq = {};
    const numSet = new Set();
    for (const num of nums) {
        numFreq[num] = (numFreq[num] || 0) + 1;
        numSet.add(num);
    }
    console.log(Array.from(numSet));
    const sortedNums = Array.from(numSet).sort((a, b) => numFreq[b] - numFreq[a])
    const res = sortedNums.slice(0, k);
    return res;
}

// Bucket sort: O(n)
const topKFrequent2 = (nums, k) => {
    const freq = {};
    const freqBucket = Array.from({length: nums.length + 1}, () => []);

    // Get freq of each num
    for (const num of nums) {
        freq[num] = ( freq[num] || 0 ) + 1
    }

    for (const f in freq) {
        freqBucket[freq[f]].push(parseInt(f))
    }

    const res = [];
    for (let i = freqBucket.length - 1; i > 0; i--) {
        for (let j = 0; j < freqBucket[i].length; j++) {
            res.push(freqBucket[i][j]);
            if (res.length === k) {
                return res;
            }

        }
    }
}

console.log(topKFrequent2([1,2,2,3,3,3], 2))