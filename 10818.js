// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
const fs = require("fs");
let input = fs.readFileSync("./input10818.txt").toString().split("\n");
console.log(input);

input = input.map((value) => value.split(" "));
console.log(input);

let a;
for (let i = 1; i < input.length; i++) {
  a = input[i].map((value) => Number(value));
}
let max = a[0];
let min = a[0];
console.log(a);

for (let i = 1; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  }

  if (min > a[i]) {
    min = a[i];
  }
}
console.log(max);
console.log(min);
