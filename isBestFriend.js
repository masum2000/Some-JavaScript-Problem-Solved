function isBestFriend(objectOne,objectTwo){
     if(objectOne.name == objectTwo.friend && objectTwo.name == objectOne.friend){
        console.log("true")
     }
     else{
        console.log("false")
     }
}
isBestFriend(
    { name: "abul", friend:"babul"}, {name: "babul", friend:"abul"}
)