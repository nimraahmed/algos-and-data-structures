
 // Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let mergedNode;
  if (l1.val < l2.val) {
    mergedNode = new ListNode(l1.val);
    mergedNode.next = mergeTwoLists(l1.next, l2);
  } else {
    mergedNode = new ListNode(l2.val);
    mergedNode.next = mergeTwoLists(l2.next, l1);
  }
  return mergedNode;
};
