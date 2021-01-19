package leecode;

import java.util.List;

public class Utils {
    public static void printArray(int[] a) {
        System.out.printf("[");
        for (int e: a) {
            System.out.printf(String.valueOf(e) + " ");
        }
        System.out.println("]");
    }
}
