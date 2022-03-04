class Solution
{
public:
    int maxProfit(vector<int> &prices, int fee)
    {
        int maxp = 0;
        int min_price = prices[0]; // We buy the first day of stock by default
        for (int i = 1; i < prices.size(); i++)
        {
            // We buy a stock with a lower price, considering the previous stock was sold
            if (prices[i] < min_price)
                min_price = prices[i];

            // We do nothing if the price isn't lower and the profit is negative
            if (prices[i] <= min_price + fee && prices[i] >= min_price)
                continue;

            // We collect profit when it's positive, and update the min_price with the fee because with the fee subtracted, the next real transaction won't be charge for extra fee
            if (prices[i] > min_price + fee)
            {
                maxp += prices[i] - min_price - fee;
                min_price = prices[i] - fee;
            }
        }
        return maxp;
    }
};