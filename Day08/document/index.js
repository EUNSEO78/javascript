// document : html을 담당하는 타입

// a 는 element타입
const a = document.createElement("h1"); //h1 태그 만들어줘
a.innerText = "점메추!"; // h1 태그에 점메추 넣기
document.body.appendChild(a); //body에 a 넣기

// 1. button 태그를 만들고, 내용을 럭키비키! body에 넣어주기
const b = document.createElement("button");
b.innerText = "럭키비키!";
document.body.appendChild(b);

// 2. div태그 만들고, 유저에게 아침에 먹었던 음식을 물어보고 div에 내용에 넣고 body에 보여주기!
const c = document.createElement("div");
c.innerText = prompt("아침에 먹었던 음식");
document.body.appendChild(c);
