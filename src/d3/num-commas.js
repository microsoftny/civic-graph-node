var numCommas = function(numberStr) {
  console.log("Running numCommas with numberStr =", numberStr);
  numberStr += '';
  var x = numberStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  console.log("And returning x1 + x2 = " + (x1 + x2));
  return x1 + x2;
};

module.exports = numCommas;
