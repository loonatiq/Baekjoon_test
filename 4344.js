// 문제
// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

// 입력
// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 출력
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
const fs = require("fs");
let input = fs
  .readFileSync("./input4344.txt")
  .toString()
  .split("\n")
  .map((value) => value.split(" "));
console.log(input);
let sum = 0;
let count = 0;
for (let i = 1; i < input.length; i++) {
  const a = input[i].map((value) => Number(value));
  console.log(a);
  for (let j = 1; j < a.length; j++) {
    sum += a[j];
  }
  let avg = sum / a[0];
  console.log(sum);
  console.log(avg);
  for (let k = 1; k < a.length; k++) {
    if (a[k] > avg) {
      count++;
    }
  }
  let result = ((count / a[0]) * 100).toFixed(3);
  console.log(result + "%");
  sum = 0;
  count = 0;
}
