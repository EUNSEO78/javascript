const starbucks = [
  { name: "americano", price: 3000, shots: 2, ingredients: ["water", "bean"] },
  {
    name: "latte",
    price: 4000,
    shots: 2,
    ingredients: ["water", "bean", "milk"],
  },
  {
    name: "frappuccino",
    price: 4500,
    shots: 2,
    ingredients: ["water", "bean", "milk", "shake"],
  },
  {
    name: "mocha",
    price: 4500,
    shots: 2,
    ingredients: ["water", "bean", "milk", "chocolate"],
  },
];

const menu = document.createElement("div");
menu.style.display = "grid";
menu.style.gridTemplateColumns = "repeat(2, 1fr)";
starbucks.forEach((x) => {
  const box = document.createElement("div");
  box.innerHTML = `
    <h4>${x.name + "🧊"}</h4>
    <h5>${x.price + 1000} ${x.shots}</h5>`;

  box.style.boxShadow =
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.justifyContent = "center";
  box.style.alignContent = "center";
  box.style.padding = "20px";

  menu.appendChild(box);
});

document.body.appendChild(menu);
