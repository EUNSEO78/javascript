const year = Number(prompt("태어난 연도 입력"));
const isAdult = 2025 - year >= 20 ? "성인입니다" : "미성년자입니다";
console.log(isAdult);

const height = Number(prompt("키:"));
const canRide = height >= 140 ? "탑승가능" : "탑승불가능";
console.log(canRide);

const gender = prompt("성별 입력");
const age = Number(prompt("나이 입력"));
const army = gender == "남성" && age >= 20 ? "징집대상" : "징집대상아님";
console.log(army);

const total = Number(prompt("물품의 총 구매액수"));
const cost = total >= 50000 ? total * 0.9 : total;
console.log(total);

const age1 = Number(prompt("나이 입력"));
const result = age1 >= 20 ? "성인" : age1 > 13 ? "청소년" : "어린이";
console.log(result);
