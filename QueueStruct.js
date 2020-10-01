class QueueNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.len = 0
  }

  isEmpty() {
    return this.len === 0
  }

  enQueue(value) {
    let oldLast = this.last;
    this.last = new QueueNode(value)

    if(this.isEmpty()) {
      this.first = this.last
    } else {
      oldLast.next = this.last
    }
    this.len++
  }

  deQueue() {
    if(this.isEmpty()) return null
    else {
      let deqValue = this.first.value
      this.first = this.first.next
      this.len--
      return deqValue
    }
  }
}