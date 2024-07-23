const lunch = prompt("오늘 점심 메뉴는?");
console.log(`${lunch}를 먹었다니 맛있었겠군요!`);

const base = Number(prompt("밑변 입력"));
const height = Number(prompt("높이 입력"));
console.log(`정삼각형의 넓이는 ${(base * height) / 2} 입니다.`);

const won = Number(prompt("원화 입력"));
const rate = 0.113;
console.log(`엔화: ${won * rate}`);
