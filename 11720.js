// 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

// 출력
// 입력으로 주어진 숫자 N개의 합을 출력한다.
const fs = require("fs");
let input = fs.readFileSync("./input11720.txt").toString().split("\n");
// .map((value) => Number(value.split(" ")));
console.log(input);
let num = input[0];
let value = input[1];
value = value.split("");
let sum = 0;
console.log(value);
for (let i = 0; i < num; i++) {
  sum += Number(value[i]);
}
console.log(sum);
