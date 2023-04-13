const { NotImplementedError } = require('../extensions/index.js');


function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  let temp = arr.slice(0);
  let temp2 = arr.filter((x)=>{return x !== -1}).sort((a,b)=>{return a - b;});
  let res = [];
  counter = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === -1){
      res.push(arr[i]);
    } else {
      res.push(temp2[counter]);
      counter++;
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
