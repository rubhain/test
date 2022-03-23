//add close button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//delete item on click
var closeBtn = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
//check onclick
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
//Add button
function newE() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
