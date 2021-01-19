package leecode;

import java.util.HashMap;
import java.util.Map;

public class MaxNumberKSumPairs {
    public int maxOperations(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        int ans = 0;
        for (int n : nums) {
            map.put(n, 1 + map.getOrDefault(n, 0));
        }
        for (int key : map.keySet()) {
            if (key * 2 == k) {
                ans += map.get(key) / 2;
            }else if (map.containsKey(k - key)) {
                int min = Math.min(map.get(key), map.get(k - key));
                ans += min;
                map.put(key, map.get(key) - min);
                map.put(k - key, map.get(k - key) - min);
            }
        }
        return ans;
    }

//    public int maxOperations(int[] nums, int k) {
//        Map<Integer, Integer> map = new HashMap<>();
//        int result = 0;
//
//        for(int i: nums) {
//            if (i >= k)
//                continue;
//            if (map.containsKey(i) && map.get(i) > 0) {
//                map.put(i, map.get(i) - 1);
//                result++;
//            } else {
//                int value = map.getOrDefault(k - i, 0);
//                map.put(k - i, value + 1);
//            }
//        }
//        return result;
//    }

    public static void main(String[] args) {
        int[] nums = {2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2};
        int k = 3;
        MaxNumberKSumPairs m = new MaxNumberKSumPairs();
        int rs = m.maxOperations(nums, k);
        System.out.println(rs);
    }
}
