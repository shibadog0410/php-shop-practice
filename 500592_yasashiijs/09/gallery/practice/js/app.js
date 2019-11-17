let album = [
    { src: "img/1.jpg", msg: "山道の緑" },
    { src: "img/2.jpg", msg: "階段" },
    { src: "img/3.jpg", msg: "高尾山" },
    { src: "img/4.jpg", msg: "ロープウェイ" },
    { src: "img/5.jpg", msg: "お蕎麦" }
];

let mainImage = document.createElement("img");
mainImage.setAttribute("src", album[0].src);
mainImage.setAttribute("alt", album[0].msg);
let mainMsg = document.createElement("p");
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector("#gallery .main");
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

let thumbFlame = document.querySelector("#gallery .thumb");
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement("img");
    thumbImage.setAttribute("src", album[i].src);
    thumbImage.setAttribute("alt", album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

thumbFlame.addEventListener("click", function(event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});
