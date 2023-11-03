function bracketMatch(inputString){
     var stack = [];
     var idx = 0;
     //var currentChar=inputString[0];//method 1
     var currentChar=inputString.charAt(0);//method 2
     //loop
     while(currentChar != ''){
        if(currentChar == '{' || currentChar=='[' || currentChar=='('){
            stack.push(currentChar);
        }else if(currentChar == '}' || currentChar==']' || currentChar==')'){
              if(stack.length==0){//is stack empty?
                  break;//unmatch
              }else{
                var openBracket = stack.pop();
                if(   openBracket == '{' && currentChar=='}' 
                   || openBracket == '[' && currentChar==']' 
                   || openBracket == '(' && currentChar==')'){
                      //match
                   }
                else{
                    //unmatch
                    break;
                }
              }
        }
        //next char
        idx++;
        currentChar = inputString.charAt(idx);

     }
     if(stack.length==0){
        //match
        console.log("Matched!")
     }else{
        //unmatch
        console.log("Unmatched!")
     }

}

bracketMatch("([])}")