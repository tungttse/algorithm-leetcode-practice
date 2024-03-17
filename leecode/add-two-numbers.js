/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // let dummy = new ListNode();
    // let curr = dummy;
    // let carry = 0;
    // while(l1 || l2) {

    //     let v1 = l1.val || 0;
    //     let v2 = l2.val || 0;
    //     let sum = v1 + v2 + carry;
    //     carry = 0;
    //     if(sum >= 10 ) {
    //         carry = 1;
    //         sum = sum - 10;
    //     }
    //     curr = new ListNode(sum, null);
        
    //     curr = curr.next;
    //     l1 = l1.next;
    //     l2 = l2.next;
    // }   

    // return dummy;
    let re = []
     let dum = new ListNode(null,null);
     let curr = dum;
    
    let carry = 0;
    
    while(l1 || l2 || carry) {
        let total = carry;
        if(l1) {
            total += l1.val || 0;
            l1 = l1.next;
        }
        
        if(l2) {
            total += l2.val || 0;
             l2 = l2.next;
        }
        
        carry = 0;
        if(total >= 10 ) {
            carry = 1;
            total = total - 10;
        } 

        dum.next = new ListNode(total);
        dum = dum.next;

        
       
    }

    return curr.next;
    
};