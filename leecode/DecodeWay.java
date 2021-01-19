package leecode;

public class DecodeWay {
    public int numDecodings(String s) {
        if (s.length() == 0) return 0;
        int n = s.length();

        int[] d = new int[n + 1];
        d[0] = s.charAt(0) == '0' ? 0: 1;

        // example  'J' -> "10" and 'T' -> "20". will return 1
        // "01" not valid, will return 0.
        d[1] = s.charAt(0) == '0' ? 0: 1;

        for (int i = 2; i <= n; i++) {
            int first = Integer.valueOf(s.substring(i-1, i));
            int second = Integer.valueOf(s.substring(i-2, i));

            if (first > 0 && first < 10) {
                d[i] += d[i-1];
            }

            if (second >= 10 && second <= 26) {
                d[i] += d[i-2];
            }
        }

        return d[n];
    }

    public static void main(String[] args) {
        DecodeWay dw = new DecodeWay();
        int rs = dw.numDecodings("123");
        System.out.println("rs : " + rs);
    }
}
