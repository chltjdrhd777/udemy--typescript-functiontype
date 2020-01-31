//function type
function functionType(a1, a2) {
    return a1 + a2;
}
function functionType2(a3) {
    console.log("It is " + a3);
}
let functionOverlap;
functionOverlap = functionType;
functionOverlap = functionType2;
//functionOverlap = 5; ---> error because functionOverlap should be "Function"
console.log(functionOverlap(8, 8)); // 16
console.log(functionOverlap(8, 8)); // undefined because ,although functionOverlap(8,8) is exactly function, it is replaced with functionType2 which do not need a parameter + there is any return.
//If you want to set the more exact type, let's use this
let functionOverlap2;
function addAndHandle(n1, n2, f) {
    const result = n1 + n2;
    f(result);
}
addAndHandle(10, 20, things => {
    console.log(things);
    //return things ---> although typescript doesn't pick this up as an error, it is essentially true because in the functionPractice, I declare that the result is always "void".
});
function sendRequest(data, cb) {
    // in the two parameters, the second thing is function "cb" which function's parameter type is nay and the result type is void.
    // ... sending a request with "data"
    return cb({ [data]: "Hi there!" }); //though whatever function is placed, this function would use parameter "{data:"Hi there!"}"
}
sendRequest("Send this!", response => {
    console.log(response);
    return true;
}); //therefore, the result is {"Send this":'Hi there!'}
//unknown type
//# sourceMappingURL=project3.js.map