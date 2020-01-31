//function type
function functionType(a1: number, a2: number) {
  return a1 + a2;
}

function functionType2(a3: string) {
  console.log("It is " + a3);
}

let functionOverlap: Function;

functionOverlap = functionType;
functionOverlap = functionType2;
//functionOverlap = 5; ---> error because functionOverlap should be "Function"
console.log(functionOverlap(8, 8)); // 16
console.log(functionOverlap(8, 8)); // undefined because ,although functionOverlap(8,8) is exactly function, it is replaced with functionType2 which do not need a parameter + there is any return.

//If you want to set the more exact type, let's use this

let functionOverlap2: (x: number, y: number) => number;
// functionOverlap2 = functionType2; ---> error because functionOverlap2 shoule be the type which has x and y number parameter and the result type is number.

type functionPractice = (num: number) => void;

function addAndHandle(n1: number, n2: number, f: functionPractice) {
  const result = n1 + n2;
  f(result);
}

addAndHandle(10, 20, things => {
  console.log(things);
  //return things ---> although typescript doesn't pick this up as an error, it is essentially true because in the functionPractice, I declare that the result is always "void".
});

function sendRequest(data: string, cb: (response: any) => void) {
  // in the two parameters, the second thing is function "cb" which function's parameter type is nay and the result type is void.
  // ... sending a request with "data"
  return cb({ [data]: "Hi there!" }); //though whatever function is placed, this function would use parameter "{data:"Hi there!"}"
}

sendRequest("Send this!", response => {
  console.log(response);
  return true;
}); //therefore, the result is {"Send this":'Hi there!'}

//unknown type
