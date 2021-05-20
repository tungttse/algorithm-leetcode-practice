package leecode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MaximumSubarray {
    public static int maxSubArray(int[] nums) {
//        int maxSoFar = nums[0];
//        int maxEndingHere = nums[0];
//        for (int i = 1; i < nums.length; i++) {
//            maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
//            maxSoFar = Math.max(maxEndingHere, maxSoFar);
//        }
//        return maxSoFar;

        int maxSofar = nums[0];
        int maxTotal = nums[0];

        int minTotal = nums[0];
        int minSofar = nums[0];

        for(int i = 1; i < nums.length; i++) {
            if((maxTotal + nums[i]) > nums[i]) {
                maxTotal = maxTotal + nums[i];
            } else {
                maxTotal = nums[i];
            }

            if(maxTotal > maxSofar) {
                maxSofar = maxTotal;
            }

            minTotal = Math.min(minTotal + nums[i], minTotal);
            minSofar = Math.max(minTotal, minSofar);
        }

        System.out.println(maxSofar);
        System.out.println(minSofar);

        return Math.abs(maxSofar + minSofar);
    }

    public int kandaneAlgo(int[] arr) {
        int maxEndHere = 0;
        int maxSoFar = 0;
        for (int i = 0; i < arr.length; i++) {
            maxEndHere += arr[i];
            if (maxEndHere < 0) {
                maxEndHere = 0;
            }
            if (maxSoFar < maxEndHere) {
                maxSoFar = maxEndHere;
            }
        }
        return maxSoFar;
    }

    public static int[] findNLowestNumbers(int n, int k, int sum){
        // n is amount of results
        // k is the require number must appear
        // sum

        int[] rs = new int[n];

        int sub = sum - k;

        // find subset from 0 -> sub has sum = sub.
        HashMap<Integer, List<Integer>> map = new HashMap<>();
        List<List<Integer>> listOList = new ArrayList<>();
        int tmp = 0;



        int flat = sub;
        while (flat > 0) {
            List<Integer> ll = new ArrayList<>();
            for (int j = 1; j <= (sub-flat); j++) {
                ll.add(1);
            }
            ll.add(flat);
            listOList.add(ll);
            flat--;
        }

        listOList.stream().forEach(arr-> {
            int result = 0;
            for (int i = arr.size() - 1; i >= 0; --i) {
                result = 10*result + arr.get(i);
            }
            System.out.println(result);
        });


        return rs;
    }

    public static List<Integer> getAll(int n) {
        List<List<Integer>> rs = new ArrayList<>();
        rs = getArrayNum(1, n);

        rs.stream().forEach(x -> System.out.println(x));

        return null;
    }

    public static List<List<Integer>> getArrayNum(int part, int n) {
        List<List<Integer>> rs = new ArrayList<>();
        List<Integer> ll = new ArrayList<>();
        if(part == n) return null;
        ll.add(part);
        ll.add(n-part);

        rs.add(ll);

        List<List<Integer>> childRs = getArrayNum(part + 1, n);
        if(childRs != null) {
            rs.addAll(childRs);
        }
        return rs;
    }

    public static void main(String[] args) {
//        int rs = MaximumSubarray.maxSubArray(new int[]{2,-5,1,-4,3,-2});
//        System.out.println(rs);

//        findNLowestNumbers(10, 7, 10);
        getAll(3);
    }
}