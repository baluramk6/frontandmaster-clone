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

    let res = await fetch("https://victorious-cod-boot.cyclic.app/login", {
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
      alert("Check Password and Email")
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

