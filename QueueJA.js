class QueueJA {
    /**
     * 
     * @constructor
     */
    constructor(capacity) {
        this.data = new Array(capacity);
        this.size = 0;
        this.front = 0;
    }

    /**
     * Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, 
     * returning true upon success and throwing an Exception if no space is currently available.
     * @param {*} e The element to enqueue
     */
    enqueue(e) {
        if (!this.isFull()) {
            let rear = (this.front + this.size) % this.data.length;
            this.data[rear] = e;
            this.size++;
        } else {
            throw new Error("no space is currently available");
        }
    }

    /**
     * Retrieves and removes the head of this queue. This method differs from poll only in that it throws an exception if this queue is empty.
     * @returns the head of this queue
     */
    dequeue() {
        if (!this.isEmpty()) {
            let temp = this.data[this.front];
            this.front = (this.front + 1) % this.data.length;
            this.size--;
            return temp;
        } else {
            throw new Error("this queue is empty");
        }
    }

    /**
     * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
     * @returns the head of this queue, or null if this queue is empty
     */
    getFront() {
        if (!this.isEmpty()) {
            return this.data[this.front];
        } else {
            return null;
        }
    }

    /**
     * @returns the number of elements in the queue.
     */
    isEmpty() {
        return this.size == 0;
    }

    /**
     * @returns Checks whether the queue is empty. If yes, returns TRUE; otherwise, returns FALSE.
     */
    isFull() {
        return this.size == this.data.length;
    }

    /**
     * Removes all elements from the queue.
     */
    clear() {
        while (this.size > 0) {
            try {
                this.dequeue();
            } catch (error) {
                throw new Error(error);
            }
        }
    }

    /**
     * Returns the number of elements in the queue.
     */
    getSize() {
        return this.size;
    }
}

module.exports = QueueJA;