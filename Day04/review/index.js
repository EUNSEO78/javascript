const speed = Number(prompt("자동차 속도 입력"));
const limit_speed = Number(prompt("제한 속도 입력"));
const result = speed > limit_speed ? "과속입니다" : "제한속도로 운행중이네요";
console.log(result);

const europe = ["영국", "프랑스", "독일", "스페인", "이탈리아", "스위스"];
const choice = Number(prompt(`${europe} 어느 나라 가고 싶어 (번호입력)`));
console.log(`${europe[choice]}나라를 가고 싶어하군요! 다음에 같이 갑시다`);
