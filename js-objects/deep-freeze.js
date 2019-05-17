// https://www.codewars.com/kata/deep-freeze/train/javascript
// Deep freze

Object.deepFreeze = function (object) {
  Object.freeze(object);
  Object.keys(object).forEach( (k) => {
    if ( typeof(object[k]) === "object" ) {
      Object.deepFreeze(object[k]);
    }
  } )
}