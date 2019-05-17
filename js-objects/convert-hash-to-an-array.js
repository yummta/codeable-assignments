// https://www.codewars.com/kata/convert-hash-to-an-array/train/javascript
// Convert hash to an array

function convertHashToArray(hash){
  result = []
  Object.keys(hash).sort().map((k) => result.push([k, hash[k]]))
  return result
}