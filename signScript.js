var compare = document.getElementById("login");
var invalidUser = document.getElementById("invalidUser");
var forgot = document.getElementById("forgot");
var notNow = document.getElementById("notNow");

compare.addEventListener("click", isEqual);
function isEqual() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (
    email == localStorage.getItem("email") &&
    pass == localStorage.getItem("password")
  ) {
    localStorage.setItem("name", "Testing LocalStorage ");
    window.open("profile.html");
  } else {
    invalidUser.textContent = "Invalid Email or Password";
    invalidUser.style.color = "red";
  }
}
function goNewContact() {
  localStorage.setItem("id", "Testing Again LocalStorage!");
  window.open("newContact.html");
}
forgot.addEventListener("click",()=> alert("Forgot"));
notNow.addEventListener("click",() => alert("Not Now"));
