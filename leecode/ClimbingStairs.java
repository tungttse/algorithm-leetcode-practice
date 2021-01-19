package leecode;

public class ClimbingStairs {
    public static int climbStairs(int n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;

        int last1value = 2;
        int last2Value = 1;
        int main_result = 0;

        for (int i = 3; i <= n; i++) {
            main_result = last1value + last2Value;
            last2Value = last1value;
            last1value = main_result;
        }
        return main_result;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(4));
    }
}
