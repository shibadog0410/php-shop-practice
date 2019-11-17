function janken() {
    // 定数定義
    const GU = 1;
    const CHOKI = 2;
    const PA = 3;
    function getHumHand() {
        let hum = prompt(
            "半角で1~3の数字を入力してください\n\n" +
                GU +
                ":グー\n" +
                CHOKI +
                ":チョキ\n" +
                PA +
                ":パー"
        );

        hum = parseInt(hum, 10);

        if (hum !== GU && hum !== CHOKI && hum !== PA) {
            return undefined;
        } else {
            return hum;
        }
    }

    function getComHand() {
        return Math.floor(Math.random() * 3) + 1;
    }

    // function getHandName(com) {
    //     switch (com) {
    //         case GU:
    //             return "グー";
    //         case CHOKI:
    //             return "チョキ";
    //         case PA:
    //             return "パー";
    //     }
    // }

    function getResult(hum, com) {
        if (hum === com) {
            msgResult = "draw";
        } else if (
            (com === GU && hum == CHOKI) ||
            (com === CHOKI && hum === GU) ||
            (com === PA && hum === CHOKI)
        ) {
            msgResult = "win";
        } else {
            msgResult = "lose";
        }
        return msgResult;
    }

    let hum;
    while (true) {
        hum = getHumHand();
        if (hum) {
            break;
        }
    }
    let com = getComHand();
    // alert(getResult(hum, com));
    return getResult(hum, com);
}
let wins = 0;
let isLose = false;
while (!isLose) {
    let result = janken();
    switch (result) {
        case "win":
            wins++;
            alert(wins + "wins.");
            break;
        case "lose":
            isLose = true;
            alert("you lose. you have won " + wins + " times.");
            break;
        case "draw":
            alert("draw.");
            continue;
    }
}
