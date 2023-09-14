class Solution {
    public int maxProfit(int[] prices) {
        // Sliding window Soulution
        int left = 0, right = 1;
        int max = 0;
        while(right < prices.length){
            // Time to sell stock
            if (prices[left] < prices[right]) {
                // Compare the profit we could get so far for one transaction
                max = Math.max(max, prices[right] - prices[left]);
            } else {
                left = right;
            }
            right++;
        }
        return max;
    }

    public int maxProfit(int[] prices) {
        // Dynamic Programming Soulution
        int[][] dp = new int[prices.length][2];
        // Initialize for first day's decision, buy stock or selling stock
        dp[0][0] = -prices[0];
        dp[0][1] = 0;
        for (int i = 1; i < prices.length; i++) {
            // Spend as low as possible.
            dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
            // Sell stock as much as posible
            dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
        }
        return dp[prices.length - 1][1];
    }
}