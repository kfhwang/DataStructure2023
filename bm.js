function bracketMatch(inputString){
     var stack = [];
     var idx = 0;
    var Bracket={'{':'}', '[':']', '(':')','<':'>'};//JSON
    // Bracket['{']='}'
    // Bracket['[']=']'
    // Bracket['(']=')'
     //var currentChar=inputString[0];//method 1
     var currentChar=inputString.charAt(0);//method 2
     var ismatch = true;
     //loop
     while(currentChar != ''){
        //if(currentChar == '{' || currentChar=='[' || currentChar=='('){
        if(Bracket[currentChar]!=undefined){
            stack.push(currentChar);
        }else if(currentChar == '}' || currentChar==']' || currentChar==')'){
              if(stack.length==0){//is stack empty?
                  ismatch = false;
                  break;//unmatch
              }else{
                var openBracket = stack.pop();
                // if(   openBracket == '{' && currentChar=='}' 
                //    || openBracket == '[' && currentChar==']' 
                //    || openBracket == '(' && currentChar==')'){
                //       //match
                //    }
                // else{
                if(Bracket[openBracket] != currentChar){
                //     //match
                // }else{
                    //unmatch
                    ismatch=false;
                    break;
                }
              }
        }
        //next char
        //idx++
        currentChar = inputString.charAt(++idx);
     }
    //if(stack.length==0 && ismatch==true){
    //if(stack.length==0 && ismatch){
    //if(stack.length==0 && currentChar==''){
    if(stack.length==0 && idx==inputString.length){
        //match
        // console.log("Matched!")
        return true;
     }else{
        //unmatch
        //console.log("Unmatched!")
        return false;
     }

}

if(bracketMatch("([])jlj>")){
    console.log("Matched!")
}else{
    console.log("Unmatched!") 
}