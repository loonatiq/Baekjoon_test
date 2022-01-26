// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
let input = fs.readFileSync("./input9498.txt").toString().split("\n");
console.log(input);

input = input.map((value) => value.split(" "));
console.log(input);

for (let i = 0; i < input.length; i++) {
  const [a] = input[i].map((value) => Number(value));
  grade(a);
}

function grade(a) {
  if (a >= 90) {
    console.log("A");
  } else if (a >= 80) {
    console.log("B");
  } else if (a >= 70) {
    console.log("C");
  } else if (a >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
