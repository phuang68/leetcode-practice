/**
 * @param {number[]} heights
 * @return {number}
 */
function containerWithMostWater(heights) {
    let maxArea = 0;
    let start = 0, end = heights.length - 1;
    while (start < end) {
        const width = end - start;
        const height = Math.min(heights[start], heights[end]);
        maxArea = Math.max(maxArea, width * height);
        if (heights[start] < heights[end]) {
            start++;
        }
        if (heights[start] > heights[end]) {
            end--;
        }
    }
    return maxArea;
}