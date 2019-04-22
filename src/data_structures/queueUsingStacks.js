const Stack = require('./stack');

class QueueWithStacks {

    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(item) {
        this.s1.push(item);
    }

    dequeue() {
        if (this.s1.isEmpty()) {
            console.error('cannot dequeue empty queue');
        }

        for (let item in this.s1.items) {
            this.s2.push(this.s1.pop());
        }

        return this.s2.pop();
    }

    empty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }

    print() {

    }
}