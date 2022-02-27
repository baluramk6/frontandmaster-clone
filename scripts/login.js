//document.querySelector("#LogInbtn").addEventListener("click", loginFunction);
let registerUser = JSON.parse(localStorage.getItem("userDataBase"));
document.querySelector("form").addEventListener("submit", loginFunction);

function loginFunction(event) {
  event.preventDefault();
  let email = document.querySelector("#userName").value;
  let pass = document.querySelector("#pass").value;

 
  let count = 0;
  for (var i = 0; i < registerUser.length; i++) {
    //console.log(registerUser.password, registerUser.emailAdd)

    if (registerUser[i].emailAdd == email && registerUser[i].password == pass) {
      alert("Login Successful");
      window.location.href = "index.html";
    } else {
      count++;
    }
    if (count == registerUser.length) {
      alert("Incorrect Email or Password");
    }
    //console.log(email, password);
  }
}
