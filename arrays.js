var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

var addElementToBeginningOfArray = (array,element) =>{
  array = [element,...array]
  return array;
}

var destructivelyAddElementToBeginningOfArray = (array,element) =>{
  array.unshift(element)
  return array;
}

