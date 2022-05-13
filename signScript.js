var compare = document.getElementById("login");
console.log(compare);

compare.addEventListener("click", isEqual);
function isEqual() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (email == "phyoe@gmail.com" && pass == "77777777") {
    window.open("profile.html");
  } else {
    alert("Unsuccessful attempt");
  }
}
