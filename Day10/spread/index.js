//  string -> array 타입 캐스팅
// spread 연산자
const a = [..."abcdefg"];
console.log(a);

// array -> string 타입 캐스팅
// 1. 지양하기
a.toString(); // a,b,c,d,e,f,g
//2. 이거 쓰기
a.join(""); // abcdefg
a.join("!"); // a!b!c!d!e!f!g
