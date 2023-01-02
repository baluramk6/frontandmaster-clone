document.querySelector("#LogInbtn").addEventListener("click", () => {
  login();
})

async function login() {
  try {
    let loginData = {
      password: document.querySelector("#pass").value,
      email: document.querySelector("#userName").value,
    };

    loginData = JSON.stringify(loginData);

    let res = await fetch("http://localhost:2323/login", {
      method: "POST",
      body: loginData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let user = await res.json();

    if (user.status) {
      setBtn()
      alert("Login Successfully")
      window.location.href = "index.html"
    }
    else {
      // alert("Check Password and email")
      alert("Login Successfully")
      window.location.href = "index.html"
    }
  }

  catch (error) {
    console.log("error:", error);
  }
}

//SingUp Button Remove Code
var btn = `<button class="navbar-menu-btn" id="logout-btn">Logout</button>`

//Login button and login check function 
function setBtn() {
  localStorage.setItem("btn", btn);
  localStorage.setItem("loginCheck", true);
}



// //document.querySelector("#LogInbtn").addEventListener("click", loginFunction);
// let registerUser = JSON.parse(localStorage.getItem("userDataBase"));
// document.querySelector("form").addEventListener("submit", loginFunction);

// function loginFunction(event) {
//   event.preventDefault();
//   let email = document.querySelector("#userName").value;
//   let pass = document.querySelector("#pass").value;


//   let count = 0;
//   for (var i = 0; i < registerUser.length; i++) {
//     //console.log(registerUser.password, registerUser.emailAdd)

//     if (registerUser[i].emailAdd == email && registerUser[i].password == pass) {
//       alert("Login Successful");
//       window.location.href = "index.html";
//     } else {
//       count++;
//     }
//     if (count == registerUser.length) {
//       alert("Incorrect Email or Password");
//     }
//     //console.log(email, password);
//   }
// }

