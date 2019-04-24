class Stack {

    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(item) {
        this.items[this.count] = item;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const item = this.items[this.count];
        delete this.items[this.count];
        return item;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.items[this.count - 1];
    }

    isEmpty() {
        return true ? !this.count : false;
    }

    printStack() {
        let str = '';

        for (let item in this.items) {

            str += this.items[item] + ' ';
        }

        return str;
    }

}

module.exports = Stack;