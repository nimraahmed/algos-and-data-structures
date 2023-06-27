//Solution for leetcode #622: https://leetcode.com/problems/design-circular-queue/description/
//Find the step-by-step explanation here: https://nimraahmed.hashnode.dev/leetcode-622-solved-design-a-circular-queue

var MyCircularQueue = function (k){

    this.data = new Array(k)
    this.maxSize = k
    this.size = 0
    this.front = 0
    this.rear = -1 
};

MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false
    this.rear = (this.rear+1)%(this.maxSize) // to prevent overflowing
    this.data[this.rear] = value
    this.size+=1
    return true 
};


MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false 

    this.front = (this.front+1)%(this.maxSize)
    this.size -= 1
    return true 
};

MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.data[this.front]
};

MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty()? -1 : this.data[this.rear] 
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.size == 0
};

MyCircularQueue.prototype.isFull = function() {
    return (this.size === this.maxSize)
};

//example use case
var obj = new MyCircularQueue(3)
console.log(obj.enQueue(1)) // true
console.log(obj.enQueue(2)) // true
console.log(obj.enQueue(3)) // true
console.log(obj.enQueue(4)) // false
console.log(obj.Rear()) // 3
console.log(obj.isFull()) // true
console.log(obj.deQueue()) // true
console.log(obj.enQueue(4)) // true
console.log(obj.Rear()) // 4
