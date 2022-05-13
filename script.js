function validate() {
  var pass = document.getElementById("password").value;
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  console.log("pass", pass);
  if (pass.length >= 8 && fName.length >= 4 && lName.length >= 4) {
    alert("Successful!");
  }
}
