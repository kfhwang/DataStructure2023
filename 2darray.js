var readline = require("readline-sync");
let ary=["zero", 1.5, {"name":"Tom", "studentID":"1141112001","age":18},3]
let ary2d =[
    ["0,1","1,1","1,0"],
    ["1,2","2,2","2,0"],
    ["1,0","0,2","0,0"]
]

console.log(ary2d[0][2])
ary2d[1].push("new")
let a= 5;

//dynamic generate 2d array
let row=9, col=7;
let dynamic2d = [];
let visited=[]
for (let row_idx = 0; row_idx < row; row_idx++) {
    dynamic2d.push([]);//dynamic2d[[],[],[],[],[],[]]
    visited.push([]);
    for (let col_idx = 0; col_idx < col; col_idx++) {
        //dynamic2d[row_idx].push(row_idx*col+col_idx);//<- 
        dynamic2d[row_idx].push(Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col))
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
}while(true);

let numVistit=0;
//to visit
//set flag=>1
//if flag==1 then game over
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
        startR = parseInt(next.split(",")[0]);
        startC = parseInt(next.split(",")[1]);  
        console.log("Visit: "+startR+", "+startC);
    }
}
//console.log(dynamic2d)
