
// You should implement your task here.

module.exports = function towelSort (matrix) {
let tempArr=[];
if(!matrix){
  return tempArr;
}
if(!matrix.length){
  return tempArr;
}
for (i=0; i<=matrix.length; i++){
  let isOdd = i%2 !==0;

  if(isOdd){
   tempArr = tempArr.concat(matrix[i]);
  }

  else{
    let reverseArr = matrix[i].toString().split('').reverse().join('');
    tempArr = tempArr.concat(reverseArr);
  }
}

return tempArr;
}
