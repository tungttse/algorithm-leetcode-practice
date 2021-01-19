package leecode;

public class JumpGame {
    public boolean canJump(int[] nums) {
        int reachable = 0;
        for (int i=0; i<nums.length; ++i) {
            if (i > reachable) {
                return false;
            }
            reachable = Math.max(reachable, i + nums[i]);
        }
        return true;
    }

    public int jump(int[] nums) {
        int reachable = 0;
        int countJump = 0;
        int curPos = 0;

        for (int i=0; i<nums.length; ++i) {
            reachable = Math.max(reachable, i + nums[i]);
            if (i == curPos) {
                countJump++;
                curPos = reachable;
            }
        }
        return countJump;
    }

    public static void main(String[] args) {
        JumpGame a = new JumpGame();

//        int[] nums = {3,0,8,2,0,0,1};
//        int[] nums = {3,2,1,0,4};
//        boolean rs = a.canJump(nums);
//        System.out.println(rs);

        int[] nums = {2,3,1,1,4};
        int rs = a.jump(nums);
        System.out.println(rs);
    }
}
