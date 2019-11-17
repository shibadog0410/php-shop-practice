let button = document.getElementById("button");
let form = document.getElementById("form");

button.addEventListener("click", function() {
    form.style.display = "block";
});

let textarea = document.getElementById("textarea");
let maxTextNum = textarea.getAttribute("maxlength");
let textMessage = document.createElement("div");
let parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

textarea.addEventListener("keyup", function() {
    let currentTextNum = textarea.value.length;
    textMessage.innerHTML = maxTextNum - currentTextNum;
});

let remaining = 10;
let timeMessage = document.createElement("div");
parent.insertBefore(timeMessage, null);
let timerId = setInterval(function() {
    timeMessage.innerHTML = remaining;
    if (remaining <= 0) {
        alert("time up");
        clearInterval(timerId);
    }
    remaining--;
}, 1000);
