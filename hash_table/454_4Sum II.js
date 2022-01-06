/**
 * https://leetcode-cn.com/problems/4sum-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    var n = nums1.length;
    const map = {}
    var count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (map[nums1[i] + nums2[j]] != undefined) {
                map[nums1[i] + nums2[j]] += 1;
            } else {
                map[nums1[i] + nums2[j]] = 1;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (map[0 - (nums3[i] + nums4[j])]) count += map[0 - (nums3[i] + nums4[j])];
        }
    }

    return count;
};