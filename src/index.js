module.exports = function check(str, bracketsConfig) {
  let arr = [];
  
  bracketsConfig.forEach((e, i) => {
    arr[i] = bracketsConfig[i][0].concat(bracketsConfig[i][1]);
  });
  
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      str = str.replaceAll(arr[j], '');

      if (str.includes(arr[j])) {
        j = 0;
        i = 0;
      }
    }
  }

  return str.length === 0 ? true : false;
};