// var ary = [1,2,3]
// var ary = new Array()
// ary.sort()
Array.prototype.heapsort = function(){
     //construction heap
    // var length = this.length;
    for (let internal = parseInt(this.length / 2) - 1; internal >= 0; internal--) {
        this.shiftDown(internal, this.length - 1);
    }
    //sort
    for (let end = this.length - 1; end >= 1; end--) {
        //swap 0, end
        var temp = this[0];
        this[0] = this[end];
        this[end] = temp;
        this.shiftDown(0, end-1);
    }
}
Array.prototype.shiftDown = function(internal,end){
    while (internal * 2 + 1 <= end) {
        var left = internal * 2 + 1;
        var right = internal * 2 + 2;
        var maxChild = left;
        if (right <= end && this[right] > this[left]) {
            maxChild = right;
        }
        if (this[internal] < this[maxChild]) {
            //swap
            var temp = this[internal];
            this[internal] = this[maxChild];
            this[maxChild] = temp;
            internal = maxChild;
        } else {
            return;
        }
    }
}

var ary=[78, 8, 29, 74, 58, 11, 68, 10, 2, 73, 50, 65, 92];
ary.heapsort()
ary.sort()
console.log(ary)