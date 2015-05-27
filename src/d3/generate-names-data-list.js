var generateNamesDataList = function (sortedList) {
  console.log("Running generateNamesDataList with " + sortedList.length + " names.");

  var datalist = "";

  for (var i = 0; i < sortedList.length; i++) {
    datalist += '<option value="' + sortedList[i] + '">';
  }

  return datalist;
};

module.exports = generateNamesDataList;