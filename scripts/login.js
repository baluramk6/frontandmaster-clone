//document.querySelector("#LogInbtn").addEventListener("click", loginFunction);
let registerUser = JSON.parse(localStorage.getItem("userDataBase"));
document.querySelector("form").addEventListener("submit", loginFunction);


function loginFunction(event) {

  event.preventDefault();
  let email = document.querySelector("#userName").value
  let pass = document.querySelector("#pass").value


  for (var i = 0; i < registerUser.length; i++) {
    //console.log(registerUser.password, registerUser.emailAdd)
    if (email == "") {
      alert("Enter Email");
    } else if (pass == "") {
      alert("Enter Password");
    } else if (registerUser[i].emailAdd != email) {
      alert("Incorrect Email");
    } else if (registerUser[i].password != pass) {
      alert("Wrong Password");
    } else if (
      registerUser[i].emailAdd == email &&
      registerUser[i].password == pass
    ) {
      alert("Login Successful");
      window.location.href = "index.html";
    }

    //console.log(email, password);
  }

}


