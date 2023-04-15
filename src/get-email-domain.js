const { NotImplementedError } = require('../extensions/index.js');


function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  flag = 0;
  let s = '';
  for (let i = 0; i < email.length; i++){
    if (flag === 1){
      if (!((s.length === 0) && (email[i] === '.'))){
        s = s + email[i];
      }
    }
    if (email[i] === '@'){
      flag = 1;
    }
    if ((flag === 1) && (email[i] === '@')){
      s = '';
    }
  }
  return s;
}

module.exports = {
  getEmailDomain
};
