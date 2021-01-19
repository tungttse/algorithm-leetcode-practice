package leecode;

import java.util.HashMap;

public class TwoSum {
    // https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/546/
    public static int[] twoSum(int[] nums, int target) {
        int firstIndex = 0;
        int secondIndex = 1;

        for(int i= 0; i < nums.length; i++) {
            for(int j = 0; j < nums.length; j++ ) {
                if(nums[i] + nums[j] == target && i!=j) {
                    firstIndex = i;
                    secondIndex= j;
                    break;
                }
            }
        }
        return new int[]{firstIndex, secondIndex};
    }

    public static int[] twoSumSl(int[] nums, int target){
        int rs[] = new int[2];
        var hm = new HashMap<Integer, Integer>();
        for (int i=0; i < nums.length; i++) {
            if(hm.containsKey(target-nums[i])) {
                rs[1] = i;
                rs[0] = hm.get(target-nums[i]);
                return rs;
            }
            hm.put(nums[i], i);
        }
        return rs;
    }
}
