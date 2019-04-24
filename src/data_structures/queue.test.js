import Queue from "./queue";

describe("Queue tests", () => {
    let queue = new Queue();

    beforeAll(() => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
    });

    it("should add element to the queue ", () => {
        let localqueue = new Queue();
        localqueue.enqueue(666)
        expect(localqueue.front()).toBe(666);
    });

    it("should have 3 elements", () => {
        expect(queue.size()).toBe(3);
    });

    it("should return the front element of the queue", () => {
        expect(queue.front()).toBe(10);
    });

    it("should return 10 and remove it from queue ", () => {
        expect(queue.dequeue()).toBe(10);
        expect(queue.size()).toBe(2);
    });
});