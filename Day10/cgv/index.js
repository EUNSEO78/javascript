// 좌석 A1 ~ A9 만들기

const theater = document.createElement("div");
theater.style.display = "grid";
theater.style.gridTemplateColumns = "repeat(14, 1fr)";

const makeSeat = (alphabet) =>{
return Array(14)
.fill(alphabet)
.map((x, i) => {
  return x + (i + 1);
}});




// const seatArray = [..."123456789"].map((x) => {
//     return "A" + x;
//   });
