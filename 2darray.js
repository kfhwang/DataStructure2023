let ary=["zero", 1.5, {"name":"Tom", "studentID":"1141112001","age":18},3]
let ary2d =[[1,2,3],[4,5,6]]
console.log(ary2d[0][2])
ary2d[1].push("new")
let a= 5;

//dynamic generate 2d array
let row=9, col=7;
let dynamic2d = [];
for (let row_idx = 0; row_idx < row; row_idx++) {
    dynamic2d.push([]);//dynamic2d[[],[],[],[],[],[]]
    for (let col_idx = 0; col_idx < col; col_idx++) {
        //dynamic2d[row_idx].push(row_idx*col+col_idx);//<- 
        dynamic2d[row_idx].push(Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col))
    }
    
}

console.log(dynamic2d)
