// const year = window.prompt("몇년생인가요?"); //year 문자타입
// const age = 2025 - Number(year); //숫자로 바꿔주기

// window.console.log(`당신의 나이는 ${age}이군요!`);

const first = prompt("첫 번째 숫자 입력");
const second = prompt("두 번째 숫자 입력");
const sum = Number(first) + Number(second);
const sub = Number(first) - Number(second);
const multi = Number(first) * Number(second);
console.log(`합은 ${sum}이고 차는 ${sub}이고 곱은 ${multi}입니다.`);

const side = Number(prompt("한 변의 길이는?"));
console.log(`정사각형의 넓이는 ${side * side} 입니다.`);

const ice_americano = Number(prompt("아아 주문 갯수?"));
const ice_latte = Number(prompt("라떼 주문 갯수?"));
console.log(`총 가격은 ${ice_americano * 1500 + ice_latte * 2500}원 입니다.`);
