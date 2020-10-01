class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.len = 0;
  }
  
  isEmpty() {
    return len===0;
  }

  size() {
    return this.len;
  }

  push(val) {
    let oldValue = this.root;
    this.root = new StackNode(val);
    this.root.next = oldValue;
    this.len++;
  }

  pop() {
    if(this.isEmpty()) return null;
    let oldValue = this.root;
    this.root = oldValue.next;
    this.len--;
  }
}