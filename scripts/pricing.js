document.querySelector("#btn").addEventListener("click", () => {
    register();
})
async function register() {
    try {
        let registerData = {
            firstName: document.querySelector("#name").value,
            lastName: document.querySelector("#lastname").value,
            email: document.querySelector("#emailp").value,
            password: document.querySelector("#pass").value,
            confirmpassword: document.querySelector("#pass2").value,
            cardnumber: document.querySelector("#cardnum").value,
        };
        // console.log(registerData)
        registerData = JSON.stringify(registerData);
        // console.log(registerData)


        let res = await fetch("http://localhost:2323/register", {
            method: "POST",
            body: registerData,
            headers: {
                "Content-Type": "application/json",
            },
        });

        let user = await res.json();
        // console.log("user:", user);

        if (user.status) {
            alert("SignUp Successfully")
            window.location.href = "login.html"
        }
        else {
            // if email exists then alert and after 3 sec page reload
            alert("Email already exists")
            setTimeout(() => { location.reload(); }, 3000);
        }

    } catch (error) {
        console.log("error:", error);
    }
}


// document.querySelector("form").addEventListener("submit", formSubmit)

// var userInfo = JSON.parse(localStorage.getItem("userDataBase")) || []

// function formSubmit(event) {
//     event.preventDefault(event);
//     var email = document.querySelector("#emailp").value;
//     var firstname = document.querySelector("#name").value;
//     var lasttname = document.querySelector("#lastname").value;
//     var password = document.querySelector("#pass").value;
//     var passwordagn = document.querySelector("#pass2").value;
//     var card = document.querySelector("#cardnum").value;


//     console.log(email, firstname, lastname, password, passwordagn, card)

//     var userData = {
//         emailAdd: email,
//         firstname: firstname,
//         lastname: lasttname,
//         password: password,
//         passwordagn: passwordagn,
//         card: card,
//     };

//     // checking both passwords are same or not
//     if (password == passwordagn) {
//         userInfo.push(userData);
//         localStorage.setItem("userDataBase", JSON.stringify(userInfo));
//         alert("Signup Completed!")
//         window.location.href = "login.html";
//     }

//     else {
//         alert("Password Miss-Match")
//         window.location.reload();
//     }


// }
// export default formSubmit;
