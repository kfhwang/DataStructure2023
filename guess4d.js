var readline = require("readline-sync");

//generate 4 digits
//Math.random()
//var answer="0123456789";
//using for()
var answer=[0,1,2,3,4,5,6,7,8,9];
for(var i=0; i<4;i++){
    var rand = Math.floor(Math.random()*10); //0~9
    var temp = answer[i];
    answer[i] = answer[rand];
    answer[rand] = temp;
    //method 2
    // answer[i] = answer[i]+answer[rand];
    // answer[rand] = answer[i]-answer[rand];
    // answer[i] = answer[i]-answer[rand];
    // a=5; b=7
    // a = a+b; //a=12
    // b = a-b; //b=5 
    // a = a-b; //a=7

    // answer = answer.replace(answer[i], answer[rand]);
    // answer = answer.replace(answer[rand], i);
}

var answer=[0,1,2,3,4,5,6,7,8,9];
//answer.sort(function(a, b){return b-a});
answer.sort(function(a, b){return Math.random()-0.5});

//console.log(answer)

//input
for(var i=0; i<7;i++){
    var counterA=0, counterB=0;
    do {
        var guess = readline.question("Please guess 4 digits?");

        if (!isNaN(guess) && guess.length == 4)//repeat digit?
            break;
        else {
            console.log("4 digits please!")
            continue;
        }
    } while (true);

    //judge ?A?B
    //  answer[0],answer[1], answer[2], answer[3];
    //  guess[0], guess[1], guess[2], guess[3];
    //sohw ?A?B
    for (let ans_idx = 0; ans_idx < 4; ans_idx++) {
       
        for (let guess_idx = 0; guess_idx < 4; guess_idx++) {
            if(guess[guess_idx] == answer[ans_idx]){
                if(guess_idx==ans_idx){
                    counterA++;
                }
                else{
                    counterB++;
                }
            }
            
        }
        
    }
    console.log("Your guess:" + counterA+"A"+counterB+"B")

     if(counterA==4){
         console.log("You win the game!");
         break;
     }
}
if(counterA<4){
    console.log("You loose!");
}




