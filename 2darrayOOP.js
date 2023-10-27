var readline = require("readline-sync");


//define Point class
class Point{
   //constructor 
   constructor(_row, _col){
    //attribute
    if(_row>=0 && _row<9 && _col>=0 && _col<7){
        this.row = _row;
        this.col = _col;
    }else{
        this.row = null;
        this.col = null;
    }
   }
   
   print(){
      console.log("("+this.row+", "+this.col+")");
   }
}
var p = new Point(15,3);//will be null, why?
var p2 = new Point(6,2)

//dynamic generate 2d array
let row=9, col=7;
let dynamic2d = [];
let visited=[]
for (let row_idx = 0; row_idx < row; row_idx++) {
    dynamic2d.push([]);//dynamic2d[[],[],[],[],[],[]]
    visited.push([]);
    for (let col_idx = 0; col_idx < col; col_idx++) {
        //dynamic2d[row_idx].push(row_idx*col+col_idx);//<- 
        //dynamic2d[row_idx].push(Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col))
        dynamic2d[row_idx].push(new Point(Math.floor(Math.random()*row), Math.floor(Math.random()*col)))
        visited[row_idx].push(0); //flag
    }
    
}
//input start point
let startR;
let startC;
do{
    startR = parseInt(readline.question("Row?"));
    startC = parseInt(readline.question("Col?"));
    if(startR>=0 && startR< row && startC>=0 && startC < col){
        break;
    }else{
        console.log("0<= Row <"+row+", 0<= Col <"+col);
        continue;
    }
}
while(true);

let numVistit=0;
//to visit
//set flag=>1
//if flag==1 then gameover
while(true){
    if(visited[startR][startC]==1){
        console.log("Game over! Num of vistied: "+numVistit);
        break;
    }else{
        visited[startR][startC]=1; 
        numVistit++;
        //next point
        // startR =  parseInt(dynamic2d[startR][startC].split(",")[0]);
        // startC =  parseInt(dynamic2d[startR][startC].split(",")[1]);
        let next = dynamic2d[startR][startC];
        startR = next.row;
        startC = next.col;  
        // console.log("Visit: "+startR+", "+startC);
        next.print();
    }
}
//console.log(dynamic2d)
