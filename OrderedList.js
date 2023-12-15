class OrderedList {
    constructor() {
        this.data = []
    }
}
OrderedList.prototype.insert = function (item) {
    //bsearch

    //sequential search
    var pos = 0;
    for (; pos < this.data.length; pos++) {
        if (item < this.data[pos])
            break;
        // else
        //     pos++;
    }
    this.data.splice(pos,0,item)
}

OrderedList.prototype.bSearch  = function(key){
    var start=0, end=this.data.length-1, mid;
    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(key == this.data[mid]){
            return mid;
        }else if(key < this.data[mid]){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return -1;
}

var myOL = new OrderedList();
myOL.insert(5);
myOL.insert(2);
myOL.insert(6);
myOL.insert(19)
myOL.insert(15)
myOL.insert(11)
myOL.insert(13)
myOL.insert(8)
myOL.insert(9)
myOL.insert(7)

console.log(myOL.bSearch(9))