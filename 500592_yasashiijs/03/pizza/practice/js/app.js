let budget;
while (true) {
    budget = prompt("所持金を半角数字で入力してください");
    budget = parseFloat(budget);
    if (budget) {
        break;
    }
}
let isHungry = confirm("お腹は空いていますか？");
try {
    if (isHungry === false) {
        throw new Error("お腹が空いていません。");
    }
    if (budget >= 1500 && isHungry) {
        alert("ピザを注文しました。");
    } else if (budget >= 500) {
        alert("ポテトを注文しました。");
    } else {
        alert("節約、節約...");
    }
} catch (error) {
    alert(error.message);
}
