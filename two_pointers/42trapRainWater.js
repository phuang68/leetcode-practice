/**
 * @param {number[]} height
 * @return {number}
 */

// Two pointer: T = O(n), S = O(1)
function trap(height) {
    let res = 0;
    let l = 0, r = height.length - 1;
    let leftMax = height[l], rightMax = height[r];
    while (l < r) {
        // We know we can trap water either way
        if (leftMax < rightMax) {
            l++;
            // leftMax either > or = height[l]
            leftMax = Math.max(leftMax, height[l]);
            // Always collects > 0 result
            res += leftMax - height[l];
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }
    }
    return res;
}

// Prefix & suffix table - T = O(n), S = O(n)