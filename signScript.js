var compare = document.getElementById("login");
var invalidUser = document.getElementById("invalidUser");

compare.addEventListener("click", isEqual);
function isEqual() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (email == "phyoe@gmail.com" && pass == "77777777") {
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
