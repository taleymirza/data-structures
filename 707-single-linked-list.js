
var Node = function(val, next=null) {
    this.val = val;
    this.next = next
    
};

var MyLinkedList = function() {
    this.head = null;
    this.count = 0
    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.count===0 || index>=this.count) return -1
    
    var current = this.head, counter = 0
    while(counter!==index){
        current = current.next
        counter++
    }
    return current.val
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var node = new Node(val,this.head)
    this.head = node
    this.count++
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    
    if(this.count===0) this.addAtHead(val)
    else{
        var current = this.head
        var node = new Node(val)
        while(current.next!==null){
            current= current.next
        }
        current.next = node;
        this.count++
    }
   
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index>this.count) return
    if(index===0) this.addAtHead(val)
    else if (index===this.count) this.addAtTail(val)
    else{
        var counter = 0, previous = this.head
        while(counter!==index-1){
            previous = previous.next
            counter++
        }
        let currentAtIndex = previous.next
        var node= new Node(val, currentAtIndex)
        previous.next = node
        this.count++
    }
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index===0){
        if(this.count==1) this.head = null
        else{
            var first = this.head
            this.head = first.next
        }
        this.count--
    }

    else if(index>0 && index<this.count){
        var counter = 0, previous = this.head
        while(counter!==index-1){
            previous = previous.next
            counter++
        }
        var currentAtIndex = previous.next
        previous.next = currentAtIndex.next
        this.count--
    }
    
};
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
