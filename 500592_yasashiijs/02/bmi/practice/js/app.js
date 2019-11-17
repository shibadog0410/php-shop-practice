let weight;
while (true) {
    weight = prompt("BMIを測定します。体重を入力してください");
    if (weight) {
        break;
    }
}
let height;
while (true) {
    height = prompt("BMIを測定します。身長を入力してください");
    if (height) {
        break;
    }
}

let bmi = weight / (height * height);
let message = "あなたのBMIは" + bmi + "です。";
alert(message);
