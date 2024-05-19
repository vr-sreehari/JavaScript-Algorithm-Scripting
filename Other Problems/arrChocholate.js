class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    extractMax() {
        if (this.size() < 1) return null;
        if (this.size() === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent >= element) break;

            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function findMinWeight(weights, d) {
    const maxHeap = new MaxHeap();

    // Insert all weights into the max-heap
    weights.forEach(weight => maxHeap.insert(weight));

    // Perform the operation for d days
    for (let i = 0; i < d; i++) {
        let heaviest = maxHeap.extractMax();
        let remainingWeight = Math.floor(heaviest / 2);
        maxHeap.insert(remainingWeight);
    }

    // Calculate the total weight of chocolates after d days
    let totalWeight = 0;
    while (maxHeap.size() > 0) {
        totalWeight += maxHeap.extractMax();
    }

    return totalWeight;
}

// Example usage:
const weights = [30, 20, 25];
const d = 4;
console.log(findMinWeight(weights, d)); // Expected output: 31
