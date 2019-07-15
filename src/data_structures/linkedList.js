const Node = require('./Node');

class linkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }

    insertAtHead(item) {
        const newNode = new Node(item);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    insertAtTail(item) {
        const newNode = new Node(item);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    delete(item) {
        let current = this.head;
        let prev = null;
        while (current !== null) {

            if (current.data === item) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }

            prev = current;
            current = current.next;
        }
        return -1;
    }

    deleteAtHead() {
        if (this.head !== null) {
            let current = this.head;
            this.head = current.next;
        } else {
            console.log('head is null');
        }

    }

    deleteAtTail() {
        let current = this.head;
        if (this.head === null) {
            console.log('error')
        } else {
            while (current.next) {
                current = current.next;
            }
            current.data = null;
        }
        this.size--;
    }

    getIndexOf(item) {
        let current = this.head;
        let count = 0;
        if (this.head === item) {
            return count;
        } else {
            while (current) {
                if (current.data === item) {
                    return count;
                }
                current = current.next;
                count++;
            }
        }
        return -1;
    }

    size() {
        return this.size === 0;
    }

    printAll() {
        let current = this.head;
        let str = '';
        while (current) {
            if (current.data !== null) {
                str += current.data + ',';
            }
            current = current.next;
        }
        console.log(str)
    }
}