const { NotImplementedError } = require('../extensions/index.js');


function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  let copy = arr.slice(0);
  counter = 0;
  while (counter < arr.length){
    if ((copy[counter] !== '--discard-prev') && (copy[counter] !== '--double-next') && (copy[counter] !== '--double-prev') && (copy[counter] !== '--discard-next')){
      res.push(copy[counter]);
    }
    if ((copy[counter] === '--discard-prev') && (counter > 0)){
      if (copy[counter - 1] !== ''){
        res.pop();
      }
    }
    if ((copy[counter] === '--double-next') && (typeof copy[counter + 1] === 'number')){
      res.push(copy[counter + 1]);
      res.push(copy[counter + 1]);
      copy[counter] = '';
      counter = counter + 1;
    }
    if ((copy[counter] === '--double-prev') && (counter > 0) && (copy[counter - 1] !== '')){
      res.push(copy[counter - 1]);
      copy[counter] = '';
    }
    if (copy[counter] === '--discard-next'){
      copy[counter] = '';
      copy[counter + 1] = '';
      counter++;
    }
    counter++;
    console.log(res, copy, counter);
  }
  console.log('copy - ', copy);
  return res;
}

module.exports = {
  transform
};
