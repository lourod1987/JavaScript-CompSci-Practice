class StackViaArry {
    constructor() {
        this._array = [];
    }

    push(newValue) {
        this._array = [...this._array, newValue];
    }

    pop() {
        let val = this._array[this._array.length - 1];
        this._array = this._array.filter(val => val !== this._array[this._array.length - 1]);
        return val;
    }
    
    get count() {
        return this._array.length;
    }
}

const stack = new StackViaArry();

stack.push('test0');
stack.push('test1');
stack.push('test2');
stack.push('test3');
stack.push('test4');

function clearStack() {
    let count = stack.count;
    console.log(count)
    while(count > 0) {
        stack.pop();
        count--;
    }
}

console.log(stack.pop());
clearStack();