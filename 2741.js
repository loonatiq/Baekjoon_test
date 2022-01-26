// 문제
// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.
const fs = require("fs");
let input = fs.readFileSync("./input2741.txt").toString().split("\n");
console.log(input);

input = input.map((value) => value.split(" "));
console.log(input);

for (let i = 0; i < input.length; i++) {
  const a = input[i].map((value) => Number(value));
  result(a);
}

function result(a) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
}
