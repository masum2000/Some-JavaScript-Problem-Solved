function reverseName(nameOne,nameTwo){
    let friendOneName = nameOne.length;
    let friendTwoName = nameTwo.length;
    
    if ( friendOneName > friendTwoName){
        return nameOne.split("").reverse().join("");
    }
    else{
        return nameTwo.split("").reverse().join("");
    }
}

let result = reverseName ("Mizanur", "Masum");
console.log(result);