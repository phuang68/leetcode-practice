class Solution {
    public int trap(int[] height) {
        int acc = 0;
        int left = 0, right = height.length;
        int leftMax = height[0], rightMax = height[height.length - 1];
        while (left < right) {
            // If rightMaxHeight is higher, there will be water trapped on the right side
            if (leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                acc += leftMax - height[left];
            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                acc += rightMax - height[right];
            }
        }
        return acc;
    }
}