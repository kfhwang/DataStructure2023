var  MAZE= [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
   ]; 

class Point{
    constructor(_row, _col){
        this.row = _row;
        this.col = _col;
    }
}

var Step = new Point(1,1);
var Exit = new Point(8,10);
var Stack = [];
//     !(Step.row == Exit.row && Step.col == Exit.col)
/*Method 1
while(Step.row != Exit.row || Step.col != Exit.col){
    MAZE[Step.row][Step.col] = 2;
    //up
    if(MAZE[Step.row-1][Step.col] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.row = Step.row-1;
        continue;
    }

    //left
    if(MAZE[Step.row][Step.col-1] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.col = Step.col-1;
        continue;
    }
    //down
    if(MAZE[Step.row+1][Step.col] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.row = Step.row+1;
        continue;
    }
    //right
    if(MAZE[Step.row][Step.col+1] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.col = Step.col+1;
        continue;
    }
    //trace back
    if(Stack.length>0){
            // var Prev = Stack.pop();
            // Step.row = Prev.row;
            // Step.col = Prev.col;
            Step = Stack.pop();
    } else{
            break;
    }
}
//To exit
if(Stack.length>0){
   console.log("Done!");
}else{
    console.log("No Solution!");
}

*/
//Method 2
while(Step.row != Exit.row || Step.col != Exit.col){
    MAZE[Step.row][Step.col] = 2;
    //up
    if(MAZE[Step.row-1][Step.col] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.row = Step.row-1;
    }else
    //left
    if(MAZE[Step.row][Step.col-1] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.col = Step.col-1;
    }else 
    //down
    if(MAZE[Step.row+1][Step.col] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.row = Step.row+1;
    }else
    //right
    if(MAZE[Step.row][Step.col+1] == 0){
        Stack.push(new Point(Step.row,Step.col));
        Step.col = Step.col+1;
    }else{//trace back
         if(Stack.length>0){
            // var Prev = Stack.pop();
            // Step.row = Prev.row;
            // Step.col = Prev.col;
            Step = Stack.pop();
         } else{
            break;
         }
    }
}
//To exit
if(Stack.length>0){
   console.log("Done!");
}else{
    console.log("No Solution!");
}