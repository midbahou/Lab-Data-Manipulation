
// ========================= Part 1: Math Problems ===================================
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

// ------------------------------------------------------------------------------------------------------------------
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);

// ------------------------------------------------------------------------------------------------------------------
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);

// ------------------------------------------------------------------------------------------------------------------
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// ------------------------------------------------------------------------------------------------------------------
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// ------------------------------------------------------------------------------------------------------------------
// 1- Checking is all the numbers are divisible by 5
// if it's divisible by 5 means tha % 5 is gonna be 0
let isDivisible5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log("is divisible by 5:", isDivisible5);

// ------------------------------------------------------------------------------------------------------------------
// 2- Checking if the first number is larger than the last.
let isLarger = n1 > n4;
console.log("is n1 larger than n4:", isLarger);

// ------------------------------------------------------------------------------------------------------------------
// 3- Accomplish the following arithmetic chain:
    // Subtract the first number from the second number.
    // Multiply the result by the third number.
    // Find the remainder of dividing the result by the fourth number.
let subtraction = n1 - n2; // -5
let result = subtraction * n3; // -100
let remaining = result % n4; // 0
console.log("this is the remainder:", remaining);

// 4- Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(`Are our numbers are under 25: ${isUnder25}.`);


// ================== Part 2: Practical Math ==========================
                // The distance of the trip, in total, is 1,500 miles.
                // Your car’s fuel efficiency is as follows:
                // At 55 miles per hour, you get 30 miles per gallon.
                // At 60 miles per hour, you get 28 miles per gallon.
                // At 75 miles per hour, you get 23 miles per gallon.
                // You have a fuel budget of $175.
                // The average cost of fuel is $3 per gallon.

// 1- How many gallons of fuel will you need for the entire trip?
// so in case to do that, we have to calculate it for each speed separatly (55, 60 and 75 miles per hour)
// For a speed of 55 miles per hour (30 miles per gallon)
let totalDistance = 1500;
let fuelFor55 = totalDistance / 30;
console.log("This is the total gallons of fuel needed when traveling 55 miles per hour:",fuelFor55, "gallons");

// For a speed of 60 miles per hour (28 miles per gallon)
let fuelFor60 = totalDistance / 28;
console.log("This is the total gallons of fuel needed when traveling 55 miles per hour:",fuelFor60, "gallons");

// For a speed of 75 miles per hour (23 miles per gallon)
let fuelFor75 = totalDistance / 23;
console.log("This is the total gallons of fuel needed when traveling 55 miles per hour:", fuelFor75, "gallons");

// ------------------------------------------------------------------------------------------------------------------
// 2- Will your budget be enough to cover the fuel expense?
// For a speed of 55 miles per hour (30 miles per gallon)
const budget = 175;
let fuelExpense55 = fuelFor55 * 3;
console.log("is my budget be enough to cover the fuel expense", "$" + fuelExpense55, fuelExpense55 <= budget);

// For a speed of 60 miles per hour (28 miles per gallon)
let fuelExpense60 = fuelFor60 * 3;
console.log("is my budget be enough to cover the fuel expense", "$" + fuelExpense60, fuelExpense60 <= budget);

// For a speed of 75 miles per hour (23 miles per gallon)
let fuelExpense75 = fuelFor75 * 3;
console.log("is my budget be enough to cover the fuel expense", "$" + fuelExpense75, fuelExpense75 <= budget);

// ------------------------------------------------------------------------------------------------------------------
// 3- How long will the trip take, in hours?
// For a speed of 55 miles per hour
let tripTime55 = totalDistance / 55;
console.log("The time the trip it will take for a speed of 55 m/h is:", tripTime55, "hours");

// For a speed of 60 miles per hour
let tripTime60 = totalDistance / 60;
console.log("The time the trip it will take for a speed of 60 m/h is:", tripTime60, "hours");

// For a speed of 75 miles per hour 
let tripTime75 = totalDistance / 75;
console.log("The time the trip it will take for a speed of 75 m/h is:", tripTime75, "hours");