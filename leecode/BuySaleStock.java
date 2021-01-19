package leecode;

public class BuySaleStock {

    public static int maxProfit(int[] prices) {
        if (prices.length < 2) return 0;

        int maxProfit = 0;
        int minValue = prices[0];

        for (int i = 1; i < prices.length; i++) {
            maxProfit = Math.max(maxProfit, prices[i] - minValue);
            minValue = Math.min(prices[i], minValue);
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices = {7,1,5,3,6,4};
        System.out.println(BuySaleStock.maxProfit(prices));
    }
}
