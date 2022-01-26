// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
const fs = require("fs");
let input = fs.readFileSync("./input2739.txt").toString().split("\n");
console.log(input);

input = input.map((value) => value.split(" "));
console.log(input);

for (let i = 0; i < input.length; i++) {
  const a = input[i].map((value) => Number(value));
  result(a);
}

function result(a) {
  for (let i = 1; i < 10; i++) {
    let result = a * i;
    console.log(a + " * " + i + "=" + +result);
  }
}
