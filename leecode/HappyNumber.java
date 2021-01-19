package leecode;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class HappyNumber {
    public boolean isHappy(int n) {
        List<Integer> l = new ArrayList<>();
        l.add(n);
        int newNum = n;

        while (true) {
            String str = String.valueOf(newNum);
            int sum = 0;
            for (int i = 0; i < str.length(); i++) {
                int value = Integer.parseInt(String.valueOf(str.charAt(i)));
                sum += value * value;
            }
            if (sum == 1) return true;
            if(l.contains(sum)) return false;

            l.add(sum);
            newNum = sum;
        }
    }

    public static void main(String[] args) {
        HappyNumber h = new HappyNumber();
        System.out.println(h.isHappy(219));
    }
}
