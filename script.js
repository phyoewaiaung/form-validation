var joinUsBtn = document.getElementById("button");
joinUsBtn.addEventListener("click", validate);
function validate() {
  var email = document.getElementById("email").value;
  var passWarn = document.getElementById("passwordWarning");
  var pass = document.getElementById("password").value;
  var fNameWarn = document.getElementById("fNameWarn");
  var fName = document.getElementById("firstName").value;
  var lNameWarn = document.getElementById("lNameWarn");
  var lName = document.getElementById("lastName").value;
  var calendar = document.getElementById("calendar").value;
  var state = document.getElementById("states").value;
  var female = document.getElementById("female");
  var male = document.getElementById("male");
  var userData = document.getElementById("userData");
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  console.log("email", email);
  console.log("pass", pass);
  console.log("fName", fName);
  console.log("lName", lName);
  console.log("Date", calendar);
  console.log("State", state);
  console.log("user", userData);
  userData.innerHTML = "<li>YourEmail -- " + email + "</li>";
  if (pass.length < 8) {
    passWarn.textContent = "password must be at least 8 characters long";
    document.getElementById("password").style.border = "1px solid red";
  }
  if (pass.length >= 8) {
    passWarn.textContent = "";
    document.getElementById("password").style.border = 0;
    document.getElementById("password").style.backgroundColor = "lightgreen";
    userData.innerHTML += "<li>YourPassWord  -- " + pass + "</li>";
  }
  if (/\d/.test(fName) || format.test(fName)) {
    fNameWarn.textContent =
      "Name cannot contains numbers and special characters";
    document.getElementById("firstName").style.border = "1px solid red";
    document.getElementById("firstName").style.backgroundColor = "";
  }
  if (!(/\d/.test(fName) || format.test(fName))) {
    fNameWarn.textContent = "";
    document.getElementById("firstName").style.border = 0;
    document.getElementById("firstName").style.backgroundColor = "lightgreen";
    userData.innerHTML += "<li>YourFirstName -- " + fName + "</li>";
  }
  if (/\d/.test(lName) || format.test(lName)) {
    lNameWarn.textContent =
      "Name cannot contains numbers and special characters";
    document.getElementById("lastName").style.border = "1px solid red";
    document.getElementById("lastName").style.backgroundColor = "";
  }
  if (!(/\d/.test(lName) || format.test(lName))) {
    lNameWarn.textContent = "";
    document.getElementById("lastName").style.border = 0;
    document.getElementById("lastName").style.backgroundColor = "lightgreen";
    userData.innerHTML += "<li>YourLastName -- " + lName + "</li>";
  }
  userData.innerHTML += "<li>DateOfBirth -- " + calendar + "</li>";
  userData.innerHTML += "<li>Address -- " + state + "</li>";
  if (female.checked) {
    userData.innerHTML += "<li>Gender -- " + female.value + "</li>";
  }
  if (male.checked) {
    userData.innerHTML += "<li>Gender -- " + male.value + "</li>";
  }
}
