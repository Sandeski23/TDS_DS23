const input = window.document.getElementById("input");
const ul = window.document.querySelector("ul");

function adicionar() {
    var li = window.document.createElement("li");
    var value = input.value;
    var value_li = window.document.createTextNode(value);

    li.appenChild(value_li);
    ul.appendChild(li);
}