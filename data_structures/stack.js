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

    size() {
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

let stack = new Stack();
// Adding element to the stack 
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element 
// prints [10, 20, 30] 
console.log(stack.printStack());

// returns 30 
console.log(stack.peek());

// returns 30 and remove it from stack 
console.log(stack.pop());

// returns [10, 20] 
console.log(stack.printStack());