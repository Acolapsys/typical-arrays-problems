
exports.min = function min (array) {
  return (array && array.length !== 0) ? array.reduce((acc, el) => Math.min(acc, el)) : 0
}

exports.max = function max (array) {
 
  return (array && array.length !== 0) ? array.reduce((acc, el) => Math.max(acc, el)) : 0
}

exports.avg = function avg (array) {

  return (array && array.length !== 0) ? array.reduce((acc, el) => acc + el) / array.length : 0
}
