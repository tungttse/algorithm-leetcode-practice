package leecode;

import java.util.ArrayList;

public class RemoveDup {
    public static int removeDuplicates(int[] nums) {
        int i = nums.length > 0 ? 1 : 0;
        for (int n : nums) {
            if ( n != nums[i-1]) {
                nums[i++] = n;
                Utils.printArray(nums);
            }
        }
        return i;
    }

    public static void main(String[] args) {
        int[] nums = {1, 1, 2};
        RemoveDup.removeDuplicates(nums);

    }
}
