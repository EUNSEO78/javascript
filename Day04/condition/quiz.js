//quiz1
const angle = Number(prompt("각도 입력"));
if (0 <= angle && angle < 90) {
  alert("예각");
} else if (angle == 90) {
  alert("직각");
} else if (90 < angle && angle < 180) {
  alert("둔각");
} else if (angle == 180) {
  alert("평각");
} else {
  alert("입력오류!");
}

//quiz2
const grade = Number(prompt("영어 시험 점수 입력"));
if (grade >= 90) {
  alert("A");
} else if (grade >= 80) {
  alert("B");
} else if (grade >= 70) {
  alert("C");
} else if (grade >= 60) {
  alert("D");
} else {
  alert("나락");
}

//quiz 3
const ei = prompt("e인가요 i인가요");
const ns = prompt("n인가요 s인가요");
const ft = prompt("f인가요 t인가요");
const jp = prompt("j인가요 p인가요");

const mbti = {
  e: "외향적",
  i: "내향적",
  n: "직관적",
  s: "감각적",
  f: "감성적",
  t: "이성적",
  j: "계획적",
  p: "즉흥적",
};
console.log(
  `당신의 mbti는 ${mbti[ei]}이고 ${mbti[ns]}이고 ${mbti[ft]} 이고 ${mbti[jp]}이시군요`
);
