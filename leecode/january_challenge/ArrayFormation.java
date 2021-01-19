package leecode.january_challenge;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class ArrayFormation {
    public boolean canFormArray(int[] arr, int[][] pieces) {
        HashMap<Integer, int[]> map = new HashMap<>();

        for (int i = 0; i < pieces.length; i++) {
            map.put(pieces[i][0], pieces[i]);
        }

        int start = 0;
//        while (start < arr.length) {
//            if (map.containsKey())
//
//        }
        return false;
    }

//    public int[] intersect(int[] nums1, int[] nums2) {
//        int[] larger = nums1.length > nums2.length ? nums1 : nums2;
//        int[] smaller = nums1.length > nums2.length ? nums2 : nums1;
//
//        for (int i = 0; i < larger.length; i++) {
//            int start = 0;
//            while (start < smaller.length) {
//                if (larger[i] == smaller[start]) {
//
//                } else {
//                    start++;
//                }
//            }
//        }
//
//
//        HashMap<Integer, Integer> map = new HashMap<>();
//
//        for(int i = 0 ; i < nums1.length; i++) {
//            map.put(nums1[i])
//        }
//    }

    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
//        int max = Arrays.stream(candies).max().getAsInt();
        int max = 0;
        for (int i = 0; i < candies.length; i++) {
            max = Math.max(max, candies[i]);
        }
        List<Boolean> value = new ArrayList<>();
        for (int i = 0; i < candies.length; i++) {
            if (candies[i] == max) {
                value.add(true);
                continue;
            }

            if( (candies[i] + extraCandies) >= max) {
                value.add(true);
                continue;
            }
            value.add(false);

        }

        return value;
    }

    public int maximumWealth(int[][] accounts) {
        int max = 0;
        for(int i= 0; i < accounts.length; i++ ) {
            int sum = 0;
            for (int j = 0; j < accounts[i].length; j++) {
                sum+= accounts[i][j];
            }
            max = Math.max(max, sum);
        }
        return max;
    }

    public static void main(String[] args) {
        ArrayFormation ar = new ArrayFormation();

//        int[] arr = {91,4,64,78};
//        int[][] pieces = {{78},{4,64},{91}};
//        System.out.println(ar.canFormArray(arr, pieces));
//
//
//        int[] arr1 = {1,3,5,7};
//        int[][] pieces1 = {{2,4,6,8}};
//        System.out.println(ar.canFormArray(arr1, pieces1));

//        int[] arr1 = {49,18,16};
//        int[][] pieces1 = {{16,18,49}};
//        System.out.println(ar.canFormArray(arr1, pieces1));

        int[] candi = {2,3,5,1,3};
        int extra = 3;
        List<Boolean> rs = ar.kidsWithCandies(candi, extra);
        System.out.println(rs);
    }
    
}
