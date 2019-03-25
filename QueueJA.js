class QueueJA {

    constructor(size){
        this.data = new Array(size);
        this.size = 0;
        this.front = 0;
    }

    enqueue(e) {
        let rear = (this.front + this.size) % this.data.length;
        this.data[rear] = e;
        this.size++;
    }

    dequeue() {
        let temp = this.data[this.front];
        this.front = (this.front + 1) % this.data.length;
        this.size--;
        return temp;
    }

    front() {
        return this.data[this.front];
    }

    isEmpty() {
        return this.size == 0;
    }

    isFull() {
        return this.size == this.data.length;
    }

    clear() {
        while (this.size > 0) {
            try {
                this.dequeue();
            } catch (error) {
                console.log(error);
            }
        }
    }

    size() {
        return this.size;
    }
}

module.exports = QueueJA;