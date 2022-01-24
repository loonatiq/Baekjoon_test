// 첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.
const fs = require("fs");
let input = fs.readFileSync("./input1008.txt").toString().split(" ");
console.log(input);
const [a, b] = input;
console.log(a / b);
