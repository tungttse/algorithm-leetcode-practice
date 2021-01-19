package leecode;

import java.util.*;
import java.util.stream.Collectors;

public class Solution {
    /**
     *
     *
     * Given a non-empty list of words, return the k most frequent elements.
     * Your answer should be sorted by frequency from highest to lowest.
     * Example 1:
     * Input: ["red", "green", "blue", "red", "blue", "yellow", "blue"], k = 2
     * Output: ["blue", "red"]
     * Explanation: "blue" and "red" are the two most frequent words
     * with the number of occurrences being 3, 2 respectively.
     * Example 2:
     * Input: ["nordstrom", "is", "at", "downtown", "nordstrom", "at", "at", "nordstrom", "is", "nordstrom"], k = 4
     * Output: ["nordstrom", "at", "is", "downtown"]
     * Explanation: "nordstrom", "at", "is" and "downtown" are the four most frequent words,
     * with the number of occurrences being 4, 3, 2 and 1 respectively.
     *
     * */

    public static List<String> mostFrequentElements(String[] inputs, int k) {
        HashMap<String, Integer> map = new HashMap<>();

        for (int i = 0; i < inputs.length; i++) {
            String el = inputs[i];
            if(map.containsKey(el)) {
                map.replace(el, map.get(el) + 1);
            }
            else {
                map.put(el, 1);
            }
        }

        List<String> keys = new ArrayList<>(map.keySet());

        Collections.sort(keys, (a, b) -> map.get(a) > map.get(b) ? -1 : 1);


        return keys.stream().limit(k).collect(Collectors.toList());
    }

    public static void main(String[] args) {
        String[] st = new String[] {"red", "green", "blue", "red", "blue", "yellow", "blue"};

        String[] st2 = new String[] {"red", "green","green", "blue", "red", "blue", "yellow", "blue"};

        String[] st1 = new String[] {"nordstrom", "is", "at", "downtown", "nordstrom", "at", "at", "nordstrom", "is",
                "nordstrom"};

        List<String> rs = mostFrequentElements(st2, 2);
        System.out.println(rs);

        // 0nlogn + 0k;
        // 0n

        //["nordstrom", "at", "is", "downtown"]
    }





}
