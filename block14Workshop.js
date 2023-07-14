// Create a variable for the array
// Loop over the array and print only the odd numbers

const onlyOdds = [2, 4, 6, 8, 11, 20, 15, 22];

for (let i = 0; i < onlyOdds.length; i++) {
  if (onlyOdds[i] % 2 !== 0) {
    console.log(onlyOdds[i]);
  }
}

// Create a variable for a string
// Create a counter for consonants and a counter for vowels
// Loop over the string and count the number of consonants and vowels in a string storing in the correct variable
// Output should print a sentence including the ""string" has # consonants and # vowels"

const word = "hello";
let consonants = 0;
let vowels = 0;

for (let i = 0; i < word.length; i++) {
  if (
    word[i] === "a" ||
    word[i] === "e" ||
    word[i] === "i" ||
    word[i] === "o" ||
    word[i] === "u"
  ) {
    vowels++;
  } else {
    consonants++;
  }
}

console.log(
  word + " has " + consonants + " consonants and " + vowels + " vowels"
);

// Create a variable for an array
// Create a variable for the reversed array
// Loop over the array starting at the end of the array and story the values
// Push the value into the reversedArray

const originalArray = [1, -1, 2, -3, 5, -8, 13];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  const value = originalArray[i];

  reversedArray.push(value);
}

console.log(reversedArray);


// ? array from 1 to 100
// Loop through 1-100 push values that are multiples of 3 and replaces with "Fizz"
// Loop through 1-100 push values that are multiples of 5 and replacing with "Buzz"
// Prints numbers 1-100 with "Fizz" for multiples of 3 and "Buzz" for multiples of 5

for (i=0; i<101; i++) {
   if (i % 3 == 0); {
   console.log("Fizz");
}
 if (i % 5 == 0) {
    console.log("Buzz");
}
else {console.log(i);   
}
}
