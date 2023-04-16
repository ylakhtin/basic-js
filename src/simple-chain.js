const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
      this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if ((typeof position !== 'number') || (position < 1) || (position > this.arr.length) || (parseFloat(position) !== parseInt(position))){
      this.arr = [];
      throw new NotImplementedError("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    let temp = [...this.arr.reverse()];
    this.arr = null;
    this.arr = [...temp];
    return this;
  },
  finishChain() {
    let s = '';
    for (let i = 0; i < this.arr.length; i++){
      s = s + '( ' + this.arr[i] + ' )';
      if (i !== this.arr.length - 1){
        s = s + '~~';
      }
    }
    this.arr = [];
    return s;
  }
};

module.exports = {
  chainMaker
};
