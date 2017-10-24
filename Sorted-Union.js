function uniteUnique(arr) {
  // Push each argument into an array
  var argArr = [];
  for (var i = 0; i < arguments.length; i++) {
    argArr.push(arguments[i]);
  }
  // Flatten argArr
  var flatArr = argArr.reduce(
    function (acc, cur) {
      // Remove duplicate values after initail value
      return acc.concat(cur.filter(function (element) {
        return acc.indexOf(element) === -1;
      }));
    },
    []
  );
  return flatArr;
}
// Examples
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // returns [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); // returns [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1]); // returns [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // returns [1, 2, 3, 5, 4, 6, 7, 8]