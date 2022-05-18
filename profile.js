var view = document.getElementById("view");
var edit = document.getElementById("edit");
var del = document.getElementById("delete");
var view2 = document.getElementById("view2");
var edit2 = document.getElementById("edit2");
var del2 = document.getElementById("delete2");
var view3 = document.getElementById("view3");
var edit3 = document.getElementById("edit3");
var del3 = document.getElementById("delete3");
var data = document.getElementById("content");

view.addEventListener("click", viewFun);
function viewFun() {
  data.innerHTML =
    "<h3>Your Data in View 1</h3>" + localStorage.getItem("name");
  data.style.textAlign = "center";
}
view2.addEventListener("click", viewTwoFun);
function viewTwoFun() {
  data.innerHTML =
    "<h3>Your Data in View 2</h3>" + localStorage.getItem("name");
  data.style.textAlign = "center";
}
view3.addEventListener("click", viewThreeFun);
function viewThreeFun() {
  data.innerHTML =
    "<h3>Your Data in View 3</h3>" + localStorage.getItem("name");
  data.style.textAlign = "center";
}
