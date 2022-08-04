const sumAll = function(low, high) {
  let lowestNum = low;
  let highestNum = high;
  console.log(lowestNum);
  console.log(highestNum);
  let newArray = [];
  while (lowestNum <= highestNum) {
    newArray += lowestNum;
    console.log(lowestNum);
    lowestNum++;
  }
  newArray = newArray.split('');
  

  let sum = 0;
  for (let i = 0; i <= newArray.length; i++) {
    sum += newArray[i];
   
  }
  return sum;
};

sumAll(1, 4);