class Solution {
    public int maxArea(int[] height) {
        int max = 0;
        int left = 0, right = height.length - 1;
        while(left < right){
            int area = Math.min(height[left],height[right]) * (right - left);
            max = Math.max(max, area);
            // Only moves the lower one, to get more area
            if(height[left] < height[right]){
                left++;
            }else{
                right--;
            }
        }
        return max;
    }
}