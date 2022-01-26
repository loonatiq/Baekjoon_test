// 첫째 줄에 다음 세 가지 중 하나를 출력한다.

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.
const fs = require("fs");
let input = fs.readFileSync("./input1330.txt").toString().split("\n");
console.log(input);

input = input.map((value) => value.split(" "));
console.log(input);

function compare(a, b) {
  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else {
    console.log("==");
  }
}

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].map((value) => Number(value));

  compare(a, b);
}
