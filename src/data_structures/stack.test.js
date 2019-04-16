import Stack from "./stack";

describe("Stack tests", () => {
    let stack = new Stack();

    beforeAll(() => {
        stack.push(10);
        stack.push(20);
        stack.push(30);
    });

    it("should add element to the stack ", () => {
        let localStack = new Stack();
        localStack.push(666)
        expect(localStack.peek()).toBe(666);
    });

    it("should have 3 elements", () => {
        expect(stack.sizeOfStack()).toBe(3);
    });

    it("should should show the last element added", () => {
        expect(stack.peek()).toBe(30);
    });

    it("should return 30 and remove it from stack ", () => {
        expect(stack.pop()).toBe(30);
        expect(stack.sizeOfStack()).toBe(2);
    });
});