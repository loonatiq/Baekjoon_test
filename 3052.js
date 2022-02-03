// 문제
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

// 출력
// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.
const fs = require("fs");
let input = fs
  .readFileSync("./input3052.txt")
  .toString()
  .split("\n")
  .map((value) => value.split(" "));
console.log(input);
const a = input.map((value) => Number(value));
console.log(a);
let arr = [];
let num = 0;
for (let i = 0; i < a.length; i++) {
  num = a[i] % 42;
  console.log(num);
  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }
}
console.log(arr.length);
