// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
let input = fs
  .readFileSync("./input1001.txt")
  .toString()
  .split(" ")
  .map((value) => +value);
console.log(input);
const [a, b] = input;
console.log(a - b);
