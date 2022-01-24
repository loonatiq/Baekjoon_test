// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

const fs = require("fs");
let input = fs.readFileSync("./input10869.txt").toString().split(" ");
console.log(input);
const [a, b] = input;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
