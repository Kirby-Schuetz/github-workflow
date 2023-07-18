// 1. Create an input value.
// 2. If the value is a string the value is truthy then the statement is true and is expected to print true.
// 3. If the value is falsy then the statement is false and is expected to print the corresponding results:
//         false: "The boolean value false is falsy";
//         null: "The null value is falsy";
//         undefined:"undefined is falsy";
//         0: "The number 0 is falsy (the only falsy number)";
//         "": The empty string is falsy (the only falsy string)";

// console.log(!!input);
// console.log(typeof input);


let input = "";

if (input === "string") {
  console.log("true");
}
else if(input === false) {
    console.log("The boolean value false is falsy")
} else if (input === null) {
    console.log("The null value us falsy")
} else if (input === undefined) {
    console.log("undefined is falsy")
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)")
} else if (input === "") {
    console.log("The empty string is falsy (the only falsy string)")
}

// 1. Create two variables named "num1" and "num2"
// 2. Add num1 and num2 together to create a new variable "sum"
// 3. If the condition is true then, based on the "sum", it will print corresponding results:
//     sum + " is less than -1000";
//     sum + " is a negative number";
//     sum + " is equal to 0";
//     sum + " is larger than 0";
//     sum + " is greater than 100";

num1 = 50
num2= 51
sum = num1 + num2

if (sum <= -1000) {
    console.log (`${sum} is less than -1000`)
} else if (sum < 0) {
    console.log (`${sum} is a negative number`)
} else if (sum === 0) {
    console.log (`${sum} is equal to 0`)
} else if (sum > 0) {
    console.log (`${sum} is larger than 0`)
} else if (sum > 100) {
    console.log (`${sum} is greater than 100`)
}


// 1. Create two variables named "num1" and "num2"
// 2. Add num1 and num2 together to create a new variable "sum"
// 3. If the num1 and num2  is greater or equal to 5 then the condition is true. If the both num1 and num2 is not greater or equal to 5 then the condition is false.

num1 = 5
num2 = 6

if (num1 >= 5 && num2 >= 5) {
    console.log("true")
} else {
    console.log("false")
}


// Create 4 variables named "param1A", "param1B", "param2A", "param2B"
// If param1A is param1B are true and param2A and param2B are true then the expected print is true.
// If param1A is param1B are false and param2A and param2B are true then the expected print is true.
// If param1A is param1B are true and param2A and param2B are false then the expected print is true.
// If param1A is param1B are false and param2A and param2B are false then the expected print is false.

param1A = "cat"
param1B = "cat"
param2A = 6
param2B = "6"

if (param1A === param1B || param2A === param2B) {
    console.log("true")
} else {
    console.log("false")
}
