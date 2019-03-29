//trying out some codes

const isHappy = true;
console.log(isHappy);

//JavaScript engine
function jsengine(code){
  return code.split(/\s+/)
};


//PART 1

// this will push 'var', 'a', '=', '5' onto the engineCode variable.
// this is the regex of the input code that I added into the function.
// this could be the start to a JavaScript engine.
var engineCode = jsengine('var a = 5');


console.log(engineCode);
