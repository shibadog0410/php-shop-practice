let practice = document.querySelector("#sample");
practice.style.backgroundColor = "#999999";
practice.style.fontSize = "30px";
practice.style.color = "#FFFFFF";

let first = document.createElement("div");
first.setAttribute("id", "first");
first.innerHTML = "<p>要素を追加</p>";
practice.insertBefore(first, null);

let second = document.createElement("div");
second.setAttribute("id", "second");
second.innerHTML = "<p>さらに要素を追加</p>";
practice.insertBefore(second, null);

practice.removeChild(first);
