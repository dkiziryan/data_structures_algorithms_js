class Queue {

    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    enqueue(item) {
        this.items[this.count] = item;
        this.count++;
    }

    dequeue() {
        if (this.count - this.lowestCount === 0) {
            return undefined;
        }
        let item = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return item;
    }

    front() {
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return true ? (this.count - this.lowestCount === 0) : false;
    }

    printQueue() {
        let str = '';

        for (let item in this.items) {

            str += this.items[item] + ' ';
        }

        return str;
    }

    size() {
        return this.count - this.lowestCount;
    }
}

let queue = new Queue;

// returns Underflow 
console.log(queue.dequeue());

// returns true 
console.log(queue.isEmpty());

// Adding elements to the queue 
// queue contains [10, 20, 30, 40, 50] 
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

// returns 10 
console.log(queue.front(), 'should be 10');

// removes 10 from the queue 
// queue contains [20, 30, 40, 50, 60] 
console.log(queue.dequeue());

// returns 20 
console.log(queue.front(), 'should be 20');

// removes 20 
// queue contains [30, 40, 50, 60] 
console.log(queue.dequeue());

// printing the elements of the queue 
// prints [30, 40, 50, 60] 
console.log(queue.printQueue());
console.log(queue.size());