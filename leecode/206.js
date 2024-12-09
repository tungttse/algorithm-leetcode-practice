/**
 * Definition for singly-linked list. 
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
    let pre = null;
    while(head) {
        let next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }

    return head;

};

//[1,2,3,4,5]



let v = [1,2,3,4,5];
let head = new ListNode(1, null);
let h1 = new ListNode(2, null);
let h2 = new ListNode(3, null);
head.next = h1;
h1.next = h2;



for(let i = v.length ; i > 0 ; i--) {


}

