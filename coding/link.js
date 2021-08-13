
// 求链表的中间结点

// 单链表反转
var reverseList = function(head) {
    if (head == null) return null;
    while (head !== null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

// 两个有序的链表合并
function mergeTwoLists (l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// 链表中环的检测


// 删除链表倒数第n个结点
var getKthFromEnd = function(head, k) {
    let fast = null;
    let slow = null;
    fast = slow = head;
    while (k--) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    // slow就是要删除的节点
    slow.val = slow.val;
    slow.next = slow.next.next; 
};