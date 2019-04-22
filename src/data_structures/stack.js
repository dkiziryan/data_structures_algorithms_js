class Stack {

    constructor() {
        this.items = {};
        this.size = 0;
    }

    push(item) {
        this.items[this.size] = item;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return undefined;
        }
        this.size--;
        const item = this.items[this.size];
        delete this.items[this.size];
        return item;
    }

    sizeOfStack() {
        return this.size;
    }

    peek() {
        return this.items[this.size - 1];
    }

    isEmpty() {
        return true ? !this.size : false;
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