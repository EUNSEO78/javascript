//  type casting: 타입 바꾸기

// 1. 문자/불리언 숫자로!
// const first = Number("100"); //숫자 100
// const second = Number("12");
// const result = first + second;
// const result1 = "100" + "12";

// window.console.log(result); //112
// window.console.log(result1); //10012

const third = Number(true); // 1
const fourth = Number(false); // 0

// 2. 숫자/불리언 문자로!
const a = String(1500); //"1500"
const b = String(true); //"true"

// 3. 숫자/문자 -> 불리언

// 0, -0, "" 은 false
// 나머지는 다 true

//all true
Boolean("마라탕");
Boolean("마라샹궈");
Boolean("탕후루");
Boolean(1004);
Boolean(4);
