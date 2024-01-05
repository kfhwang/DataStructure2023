class Heap {
    constructor(_ary) {
        this.ary = _ary;
    }
}
Heap.prototype.sort = function () {
    //construction heap
    var length = this.ary.length;
    for (let internal = parseInt(length / 2) - 1; internal >= 0; internal--) {
        this.shiftDown(internal, length - 1);
    }
    //sort
    for (let end = length - 1; end >= 1; end--) {
        //swap 0, end
        var temp = this.ary[0];
        this.ary[0] = this.ary[end];
        this.ary[end] = temp;
        this.shiftDown(0, end-1);
    }
}


Heap.prototype.shiftDown = function (internal, end) {
    while (internal * 2 + 1 <= end) {
        var left = internal * 2 + 1;
        var right = internal * 2 + 2;
        var maxChild = left;
        if (right <= end && this.ary[right] > this.ary[left]) {
            maxChild = right;
        }
        if (this.ary[internal] < this.ary[maxChild]) {
            //swap
            var temp = this.ary[internal];
            this.ary[internal] = this.ary[maxChild];
            this.ary[maxChild] = temp;
            internal = maxChild;
        } else {
            return;
        }

    }
}

var myHeap = new Heap([78, 8, 29, 74, 58, 11, 68, 10, 2, 73, 50, 65, 92]);
myHeap.sort();
console.log(myHeap.ary)

// var ary=[78,8,29,74,58,11,68,10,2,73,50,65,92]
// ary.heapSort()