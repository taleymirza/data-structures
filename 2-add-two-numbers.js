// Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry=0, l3= new ListNode();
    let head = l3
    
    while(l1 || l2 || carry){
        
       result =(l1?l1.val:0)+(l2?l2.val:0)+ carry
       carry =Math.floor(result/10)
    
       head.next = new ListNode(result%10)

       head =  head.next
       l1 = l1 && l1.next
       l2 = l2 && l2.next
    }
   return l3.next
};
