// 문제
// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.
const fs = require("fs");
let input = fs
  .readFileSync("./input1065.txt")
  .toString()
  .split("\n")
  .map((value) => Number(value.split(" ")));

for (let i = 0; i < input.length; i++) {
  let count = 0;
  let maxNum = input[i];
  for (let j = 1; j <= maxNum; j++) {
    strNum = j.toString();
    if (j < 100) {
      count++;
    } else if (strNum[0] - strNum[1] === strNum[1] - strNum[2]) {
      count++;
    }
  }
  console.log(count);
  count = 0;
}
