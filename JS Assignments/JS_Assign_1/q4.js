// Q4: Academic Performance Evaluator
let marks = [80, 90, 70, 85, 60]; // 5 subjects

let totalMarks = marks.reduce((sum, val) => sum + val, 0);
let percentage = totalMarks / marks.length;

if (marks.some(m => m < 35)) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
