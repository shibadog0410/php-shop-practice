let omikuji = {
    results: ["大吉", "吉", "中吉", "小吉", "凶"],
    getResult: function() {
        return this.results[Math.floor(Math.random() * this.results.length)];
    }
};
console.log(omikuji.getResult());
let getResult = document.getElementById("getResult");
let result = document.getElementById("result");

getResult.addEventListener("click", function() {
    result.innerHTML = omikuji.getResult();
});
