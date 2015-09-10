function countUpBy(countUpTo, countBy) {
  var array = [];

  for(var i = countBy; i <= countUpTo; i = i + countBy) {
    array.push(i);
  }

  return array;
}
