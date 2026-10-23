// Q3: Monthly Expense Tracker
let expenses = [5000, 2000, 8000, 3000, 1500]; // food, travel, rent, bills, leisure

let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;

// Add 10% tax
let finalAmount = total;
finalAmount += finalAmount * 0.10;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount after Tax:", finalAmount.toFixed(2));
