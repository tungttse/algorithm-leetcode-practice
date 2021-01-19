package leecode;

public class SecondMinimumNode {
    public int findSecondMinimumValue(TreeNode root) {
        if(root.left == null) return -1;

        int lval = root.left.val == root.val ?  findSecondMinimumValue(root.left) : root.left.val;
        int rval = root.right.val == root.val? findSecondMinimumValue(root.right) : root.right.val;

        if (lval == -1 || rval == -1) {
            return Math.max(lval, rval);
        } else {
            return Math.min(lval, rval);
        }
    }


}
