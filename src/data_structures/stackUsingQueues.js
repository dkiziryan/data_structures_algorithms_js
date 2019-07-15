const Queue = require("./queue");

class StackWithQueues {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
    this.top;
  }

  push(item) {
    this.q1.enqueue(item);
    this.top = item;
  }

  pop() {
    if (this.q1.isEmpty()) {
      console.log("cannot pop an empty stack");
      return;
    }

    while (this.q1.size() > 1) {
      this.top = this.q1.dequeue();
      this.q2.enqueue(this.top);
    }

    let returnValue = this.q1.dequeue();

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return returnValue;
  }

  topOfStack() {
    return this.top;
  }

  empty() {
    return this.q1.isEmpty();
  }
}
