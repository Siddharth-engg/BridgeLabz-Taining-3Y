// Q2: Multi-Type Data Summary
let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Unnati", age: 20 };
let nothing = null;
let notDefined;

let report = [
  { label: "String", value: str, type: typeof str },
  { label: "Number", value: num, type: typeof num },
  { label: "Boolean", value: bool, type: typeof bool },
  { label: "Array", value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  { label: "Object", value: obj, type: typeof obj },
  { label: "Null", value: nothing, type: "null" },
  { label: "Undefined", value: notDefined, type: typeof notDefined }
];

console.table(report);
