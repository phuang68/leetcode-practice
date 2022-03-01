/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    const map = new Map();
    //Use map to keep record of the frequency of each number
    for(const num of nums){
        if(map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }
    //Create a min_heap with the compare function where the top element is the minimum number
    const min_heap = new PriorityQueue((a, b) => a[1] - b[1]);
    //Iterate through the map and push the entry to the min_heap
    for(const entry of map.entries()){
        min_heap.push(entry);
        //Only maintain the min_heap with a size of k, so that we get the top k frequent elements
        if(min_heap.size() > k){
            min_heap.pop();
        }
    }

    const res = new Array(k);
    //Collect the results from the min_heap
    for(let i = k - 1; i >= 0; i--){
        res[i] = min_heap.pop()[0];
    }

    return res;
};

class PriorityQueue{
    constructor(comparator){
        this.comparator = comparator;
        this.queue = [];
    }

    push(item){
        this.queue.push(item);
        let index = this.queue.length - 1;
        let parent = Math.floor((index - 1) / 2);
        // Bubble up
        while(parent >= 0 && this.compare(parent, index) > 0) {
            // Swap
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
  }

    pop(){
        const ret = this.queue[0];

        // Move the last node to the front
        this.queue[0] = this.queue.pop();

        let index = 0;
        // Left node is left ，right node left + 1
        let left = 1;
        let selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

        // Sift down
        while(selectedChild !== undefined && this.compare(index, selectedChild) > 0) {
            // Swap
            [this.queue[index], this.queue[selectedChild]] = [this.queue[selectedChild], this.queue[index]];
            index = selectedChild;
            left = 2 * index + 1;
            selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }

        return ret;
    }

    size(){
        return this.queue.length;
    }

    compare(index1, index2){
        if(this.queue[index1] === undefined) return 1;
        if(this.queue[index2] === undefined) return -1;
        return this.comparator(this.queue[index1], this.queue[index2]);
    }

}