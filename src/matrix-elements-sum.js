const { NotImplementedError } = require('../extensions/index.js');


function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++){
    sum = sum + matrix[0][i];
  }

  for (let i = 1; i < matrix.length; i++){
    for (let n = 0; n < matrix[i].length; n++){
      if (matrix[i-1][n] !== 0){
        sum = sum + matrix[i][n];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
