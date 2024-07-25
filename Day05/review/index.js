const bus = Number(
  prompt("[마을버스: 1500, 고속버스: 2000, 우등버스: 3000]버스종류 입력")
);
const age = Number(prompt("나이 입력"));

const bus_name = ["마을버스", "고속버스", "우등버스"];
const bus_fee = [1500, 2000, 3000];

if (age <= 13) {
  console.log(`${bus_name[bus]} 0원 결제 부탁드립니다`);
} else if (age >= 65) {
  console.log(`${bus_name[bus]} ${bus_fee[bus] * 0.7}원 결제 부탁드립니다`); //30%할인
} else {
  console.log(`${bus_name[bus]} ${bus_fee[bus]}원 결제 부탁드립니다`);
}
