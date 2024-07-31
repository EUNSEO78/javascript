const bg = ["yellow", "pink", "red", "skyblue"];

bg.forEach((x) => {
  const div = document.createElement("div");
  div.style.backgroundColor = x;
  div.style.width = "100px";
  div.style.height = "100px";
  document.body.appendChild(div);
});
// or const bg = ((x) => {
//   const div = document.createElement("div");
//   div.style.backgroundColor = x;
//   div.style.width = "100px";
//   div.style.height = "100px";
//   document.body.appendChild(div);
// });
//  ["yellow", "pink", "red", "skyblue"].forEach((x)=>{
//    bg(x)
//    })     **const bg 지우고!

const box = document.createElement("div");
box.style.display = "flex";
box.style.flexDirection = "row";

bg.forEach((x) => {
  const div = document.createElement("div");
  div.style.backgroundColor = x;
  div.style.width = "100px";
  div.style.height = "100px";
  box.appendChild(div);
  document.body.appendChild(box);
});

// or const container = document.createelement("div");
// container.style.display ="flex";
//
// const bg1 ((x) => {
//   const div = document.createElement("div");
//   div.style.backgroundColor = x;
//   div.style.width = "100px";
//   div.style.height = "100px";
//   return div;
// });

// ["yellow", "pink", "red", "skyblue"].forEach((x) => {
//  container.appendchild(bg1(x))  })

// document.body.appendChild(container);
