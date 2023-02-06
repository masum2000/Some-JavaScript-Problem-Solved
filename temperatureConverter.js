function temperatureConverter(valNum){
      let degree = (valNum - 32)/1.8;
      return parseFloat(degree.toFixed(2));
}
console.log(temperatureConverter(50));