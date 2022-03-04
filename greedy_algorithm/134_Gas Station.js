/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let sum = 0;
    let start = 0;
    let totalSum = 0;
    for (let i = 0; i < cost.length; i++) {
        sum += gas[i] - cost[i];
        totalSum += gas[i] - cost[i];//Sum up total gas and cost
        if (sum < 0) {//If sum becomes negative, it means that the starting position is not in [0, i]，reset starting position to i+1 and sum to 0。
            start = i + 1;
            sum = 0;
        }
    }

    if (totalSum < 0) return -1;//If the total sum is negative, it means that's there's no way a position that can goes along a circular route

    return start;
};