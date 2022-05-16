var userGender = "";
var joinUsBtn = document.getElementById("button");
joinUsBtn.addEventListener("click", validate);
function validate() {
  var emailWarn = document.getElementById("emailWarning");
  var email = document.getElementById("email").value;
  var passWarn = document.getElementById("passwordWarning");
  var pass = document.getElementById("password").value;
  var fNameWarn = document.getElementById("fNameWarn");
  var fName = document.getElementById("firstName").value;
  var lNameWarn = document.getElementById("lNameWarn");
  var lName = document.getElementById("lastName").value;
  var calendarWarn = document.getElementById("calendarWarning");
  var calendar = document.getElementById("calendar").value;
  var stateWarn = document.getElementById("stateWarning");
  var state = document.getElementById("states").value;
  var female = document.getElementById("female");
  var male = document.getElementById("male");
  var checkboxWarn = document.getElementById("checkboxWarning");
  var check = document.getElementById("check").value;
  var userDataHeader = document.getElementById("userDataHeader");
  var userData = document.getElementById("userData");
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  console.log("email", email);
  console.log("pass", pass);
  console.log("fName", fName);
  console.log("lName", lName);
  console.log("Date", calendar);
  console.log("State", state);
  console.log("user", userData);

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailWarn.textContent = "Enter Valid Email Address !!";
    emailWarn.style.color = "red";
  } else {
    emailWarn.textContent = "";
  }

  if (pass.length < 8) {
    passWarn.textContent = "password must be at least 8 characters long";
    passWarn.style.color = "red";
  } else {
    passWarn.textContent = "";
  }
  if (/\d/.test(fName) || format.test(fName) || fName == "") {
    fNameWarn.textContent =
      "Name cannot contains numbers and special characters and Not Null!";
    fNameWarn.style.color = "red";
  } else {
    fNameWarn.textContent = "";
  }
  if (/\d/.test(lName) || format.test(lName) || lName == "") {
    lNameWarn.textContent =
      "Name cannot contains numbers and special characters and Not Null!";
    lNameWarn.style.color = "red";
  } else {
    lNameWarn.textContent = "";
  }
  if (calendar == "") {
    calendarWarn.textContent = "Type Your Date in format";
    calendarWarn.style.color = "red";
  } else {
    calendarWarn.textContent = "";
  }
  if (state == "") {
    stateWarn.textContent = "Choose Your State";
    stateWarn.style.color = "red";
  } else {
    stateWarn.textContent = "";
  }
  if (female.checked) {
    userGender = female.value;
  }
  if (male.checked) {
    userGender = male.value;
  }
  if (check == "1") {
    checkboxWarn.textContent = "You Need To Click Checkbox!";
    checkboxWarn.style.color = "red";
  } else {
    checkboxWarn.textContent = "";
  }
  if (
    emailWarn.textContent == "" &&
    passWarn.textContent == "" &&
    fNameWarn.textContent == "" &&
    lNameWarn.textContent == "" &&
    calendarWarn.textContent == "" &&
    stateWarn.textContent == "" &&
    checkboxWarn.textContent == ""
  ) {
    userDataHeader.textContent = "YOUR DATA";
    userData.innerHTML +=
      "<li>Email: " +
      email +
      "</li><li>Password: " +
      pass +
      "</li><li>First Name: " +
      fName +
      "</li><li>Last Name: " +
      lName +
      "</li><li>Date :" +
      calendar +
      "</li><li>Gender: " +
      userGender +
      "</li><li>Address :" +
      state +
      "</li>";
  }
}
function checkbox() {
  var checkBox1 = document.getElementById("check");
  if (checkBox1.checked == false) {
    // not check
    document.getElementById("check").value = "1";
  } else {
    document.getElementById("check").value = "2";
  }
}
