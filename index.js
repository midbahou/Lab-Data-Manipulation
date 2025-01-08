// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);


// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Checking is all the numbers are divisible by 5
// if it's divisible by 5 means tha % 5 is gonna be 0
let isDivisible5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log("is divisible by 5:", isDivisible5);

// Checking if the first number is larger than the last.
let isLarger = n1 > n4;
console.log("is n1 larger than n4:", isLarger);

// Accomplish the following arithmetic chain:
    // Subtract the first number from the second number.
    // Multiply the result by the third number.
    // Find the remainder of dividing the result by the fourth number.
let subtraction = n1 - n2; // -5
let result = subtraction * n3; // -100
let remaining = result % n4; // 0
console.log("this is the remainder:", remaining);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log("is it under 25:", isUnder25);
