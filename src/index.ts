import { SinglyList } from 'ss-linked-list';

export default class Queue<T> {
  queue: SinglyList<T>;
    constructor(...values: T[]) {
    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.queue = new SinglyList(...values);
  }

  get length(): number {
    return this.queue.length;
  }
    /**
     * Read the element at the front of the queue without removing it.
     *
     * @returns {(T | null)}
     * @memberof Queue
     */
    get peek(): T | null {
        return this.queue.head;
    }

  /**
   * if is empty queue
   *
   * @returns {boolean}
   * @memberof Queue
   */
  isEmpty(): boolean {
    return this.queue.isEmpty();
  }



  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   *
   * @param {*} value
   * @returns {boolean}
   * @memberof Queue
   */
  enqueue(value): boolean {
    return this.queue.append(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   *
   * @returns {(T | null)}
   * @memberof Queue
   */
  dequeue(): T | null {
    const removedHead = this.queue.removeHead();
    return removedHead ? removedHead : null;
  }
}