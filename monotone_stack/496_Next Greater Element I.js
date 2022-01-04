/**
 * https://leetcode-cn.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Method 1: Monotone Stack
var nextGreaterElement = function (nums1, nums2) {
    const res = new Array(nums1.length).fill(-1);
    const map = new Map();
    const mstk = [];
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i);
    }
    mstk.push(0);
    for (let j = 1; j < nums2.length; j++) {
        if (nums2[mstk[mstk.length - 1]] > nums2[j]) {
            mstk.push(j);
        } else if (nums2[mstk[mstk.length - 1]] == nums2[j]) {
            mstk.push(j);
        } else {
            while (mstk.length > 0 && nums2[mstk[mstk.length - 1]] < nums2[j]) {
                let top = mstk.pop();
                if (map.has(nums2[top])) {
                    res[map.get(nums2[top])] = nums2[j];
                }
            }
            mstk.push(j);
        }
    }

    return res;
};

//Method 2: Brute force solution
var nextGreaterElement = function (nums1, nums2) {
    const res = new Array(nums1.length).fill(-1);
    var found = false;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                found = true;
            }
            if (found) {
                if (nums1[i] < nums2[j]) {
                    res[i] = nums2[j];
                    found = false;
                    break;
                }
            }
            if (j == nums2.length - 1) {
                found = false;
            }
        }
    }

    return res;
};