// 문제
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// 입력
// 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

// 출력
// 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

const fs = require("fs");
let input = fs
  .readFileSync("./input1157.txt")
  .toString()
  .toUpperCase()
  .split("");

let arr = [];
let arr2 = [];
for (let i = 0; i < input.length; i++) {
  if (arr.indexOf(input[i]) < 0) {
    arr.push(input[i]);
  }
}

for (let j = 0; j < arr.length; j++) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (arr[j] === input[i]) {
      count++;
    }
  }
  arr2.push(count);
}

if (arr2.filter((el) => el === Math.max(...arr2)).length > 1) {
  console.log("?");
} else {
  console.log(arr[arr2.indexOf(Math.max(...arr2))]);
}
