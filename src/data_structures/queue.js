class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // Adds an element to the queue
  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
  }

  // Removes an element from the queue
  dequeue() {
    if (this.count - this.lowestCount === 0) {
      return undefined;
    }
    let item = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return item;
  }

  // Returns the front element of the queue
  front() {
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return true ? this.count - this.lowestCount === 0 : false;
  }

  printQueue() {
    let str = "";

    for (let item in this.items) {
      str += this.items[item] + " ";
    }

    return str;
  }

  size() {
    return this.count - this.lowestCount;
  }
}

module.exports = Queue;
