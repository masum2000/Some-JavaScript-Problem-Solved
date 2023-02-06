function radianToDegree(radian){
    const pi = 3.1415926;
    const degree = (radian * (180/pi)).toFixed(2);
    return degree;
}
 let result = radianToDegree(10);
 console.log(result);