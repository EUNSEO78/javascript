// condition

// const number = Number(prompt("숫자 5를 눌러뵈!"));
// if (number == 5) {
//   alert("5를 눌렀군요");
// }

// const number = Number(prompt("숫자 입력"));
// if (number > 0) {
//   alert("양수이군요");
// }

// const num = Number(prompt("숫자 입력"));
// if (num > 0) {
//   alert("양수");
// } else if (num == 0) {
//   alert("0");
// } else {
//   alert("음수");
// }

const age = Number(prompt("나이 입력"));
if (age >= 20) {
  alert("성인");
} else if (age >= 17) {
  alert("고등학생");
} else if (age >= 14) {
  alert("중학생");
} else if (age >= 8) {
  alert("초등학생");
} else {
  alert("어린이");
}
