const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1.  홀수는 2배 짝수는 제곱으로 다시 만들기!
const oneTwo = arr.map((x) => {
  return x % 2 == 1 ? x * 2 : x ** 2;
});
console.log(oneTwo);

//2. 3배수는 '🥕' 5배수는 '🍒'  나머지는 '🍉'
const test2 = arr.map((x) => {
  if (x % 3 == 0) {
    return "🥕";
  } else if (x % 5 == 0) {
    return "🍒";
  } else {
    return "🍉";
  }
});
console.log(test2);

const fruits = ["apple", "banana", "melon", "kiwi", "mango", "strawberry"];

//3.  6글자 이상만 과일 명단 남기기
const sixOver = fruits.filter((x) => {
  return x.length >= 6;
});
console.log(sixOver);

//4. 알파벳 a가 포함된 과일만 남기기
const includeA = fruits.filter((x) => {
  return x.includes("a");
});
console.log(includeA);