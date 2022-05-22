var nike = document.querySelector(".nike");
var fNameWarning = document.getElementById("fNameWarning");
var lNameWarning = document.getElementById("lNameWarning");
var emailWarning = document.getElementById("emailWarning");
var passwordWarning = document.getElementById("passwordWarning");
var userData = document.getElementById("userData");
var userDataWithTable = document.getElementById("userDataWithTable");
var successHeader = document.getElementById("successHeader");
var homeBtn = document.getElementById("homePageBtn");
nike.addEventListener("click",goHomePage);
nike.style.marginTop = "0px";
nike.style.textShadow = "1px 1px green";
homeBtn.addEventListener("click", goHomePage);
function goHomePage() {
  window.open("index.html");
}

var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

function validate() {
  localStorage.setItem("name", "HAHA");
  userData.innerHTML = "";
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var val1 = document.getElementById("checkBox1").value;
  var val2 = document.getElementById("checkBox2").value;
  var paraForCheckbox = document.getElementById("paraForCheckbox");

  if (fName == "") {
    fNameWarning.textContent = "Please Fill First Name!";
    fNameWarning.style.color = "red";
  } else {
    fNameWarning.textContent = "";
  }

  if (lName == "") {
    lNameWarning.textContent = "Please Fill Last Name!";
    lNameWarning.style.color = "red";
  } else {
    lNameWarning.textContent = "";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailWarning.textContent = "Enter Valid Email Address";
    emailWarning.style.color = "red";
  } else {
    emailWarning.textContent = "";
  }
  if (pass.length < 8) {
    passwordWarning.textContent = "Password Must be at least 8 charactes long!";
    passwordWarning.style.color = "red";
  } else {
    passwordWarning.textContent = "";
  }
  if (
    fNameWarning.textContent == "" &&
    lNameWarning.textContent == "" &&
    emailWarning.textContent == "" &&
    passwordWarning.textContent == "" &&
    paraForCheckbox.textContent == ""
  ) {
    successHeader.textContent = "Successfully Created !";
    userData.innerHTML += "<li>First Name -- " + fName + "</li>";
    userData.innerHTML += "<li>Last Name -- " + lName + "</li>";
    userData.innerHTML += "<li>Email -- " + email + "</li>";
    userData.innerHTML += "<li>Password -- " + pass + "</li>";
    dataWithTable.textContent = "Your Data With Table!";
    userDataWithTable.innerHTML +=
      "<td>" +
      fName +
      "</td><td>" +
      lName +
      "</td><td>" +
      email +
      "</td><td>" +
      pass +
      "</td>";
  }
  if (!(val1 == "2" && val2 == "2")) {
    document.getElementById("paraForCheckbox").innerHTML =
      "Please check Both!";
    document.getElementById("paraForCheckbox").style.color = "red";
  } else {
    document.getElementById("paraForCheckbox").innerHTML = "";
  }
}
function chkOne() {
  var checkBox1 = document.getElementById("checkBox1");
  if (checkBox1.checked == false) {
    // not check
    document.getElementById("checkBox1").value = "1";
  } else {
    document.getElementById("checkBox1").value = "2";
  }
}
function chkTwo() {
  var checkBox2 = document.getElementById("checkBox2");
  if (checkBox2.checked == false) {
    // not check
    document.getElementById("checkBox2").value = "1";
  } else {
    document.getElementById("checkBox2").value = "2";
  }
}
// function changeColor() {
//   document.getElementById("fName").style.backgroundColor = "Red";
// }
// function changeColor2() {
//   document.getElementById("password").style.backgroundColor = "lightgreen";
// }
// function mouseOver() {
//   document.getElementById("lName").style.backgroundColor = "blue";
// }
// function mouseUp() {
//   document.getElementById("fName").style.backgroundColor = "cyan";
// }
// function mouseMove() {
//   document.getElementById("email").style.backgroundColor = "pink";
// }
// function changeData() {
//   changeData.innerHTML = "<p>Changed</p>";
// }
