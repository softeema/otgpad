var input = document.getElementById("input");
var copyBtn = document.getElementById("copyBtn");
var clearBtn = document.getElementById("clearBtn");
window.addEventListener("load", function() {
input.value = localStorage.getItem("inputVal");
})
input.addEventListener("input", function() {
localStorage.setItem("inputVal", input.value);
})
copyBtn.addEventListener("click", function() {
input.select();
document.execCommand("copy");
})
clearBtn.addEventListener("click", function() {
input.value = "";
localStorage.clear();
})