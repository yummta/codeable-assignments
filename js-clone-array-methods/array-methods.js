// Pop
function myPop (arr) {
  const newArr = []
  const arrLength = arr.length
  if ( arrLength === 0 ) {
    return undefined
  } else {
    let lastItem = arr[arrLength-1]
    for (let i = 0; i < arrLength - 1; i++) {
      newArr.push(arr[i])
    }
    arr = newArr
    return lastItem

  }
}

myPop([1,2,3])

// Some
function mySome( arr, cb ) {
  for ( let i = 0; i < arr.length; i++ ) {
    if ( cb( arr[i], i, arr ) ) {
      return true;
    }
  }
  return false;
}

mySome( [1,2,3,4,2,5], ( val ) => val === 2 )

// Find
function myFind( arr, cb ) {
  for ( let i = 0; i < arr.length; i++ ) {
    if ( cb( arr[i], i, arr ) ) {
      return arr[i];
    }
  }
  return false;
}

myFind( [ {name: "Paul", username: "yummta"}, {name: "Tomas", username:"tomsa"} ], ( val ) => val.name === "Tomas" )

// Join
function myJoin(arr, conector) {
  let result = ""
  const arrLength = arr.length
  if ( arrLength > 0) {
    for ( let i = 0; i < arrLength - 1 ; i++ ) {
      result += arr[i] + conector
    }
    return result + arr[arrLength - 1]
  }
  return result
}