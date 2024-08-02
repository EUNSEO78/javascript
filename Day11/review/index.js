// 유저에게 그리드 갯수를 물어보고 , 그 갯수에 따라서

const column = Number(prompt("그리드 갯수"));
const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;

// A - Z까지 각각 내용이 담긴 Box나열하기
[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach((x) => {
  const box = document.createElement("div");
  box.style.boxShadow =
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
  box.style.display = "flex";
  box.style.justifyContent = "center";
  box.style.alignContent = "center";
  box.style.padding = "20px";
  box.innerText = x;
  container.appendChild(box);
});

document.body.appendChild(container);
