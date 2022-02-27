document.querySelector("form").addEventListener("submit", formSubmit)

var userInfo = JSON.parse(localStorage.getItem("userDataBase")) || []

function formSubmit(event) {
    event.preventDefault(event);
    var email = document.querySelector("#emailp").value;
    var firstname = document.querySelector("#name").value;
    var lasttname = document.querySelector("#lastname").value;
    var password = document.querySelector("#pass").value;
    var passwordagn = document.querySelector("#pass2").value;
    var card = document.querySelector("#cardnum").value;


    console.log(email, firstname, lastname, password, passwordagn, card)

    var userData = {
        emailAdd: email,
        firstname: firstname,
        lastname: lasttname,
        password: password,
        passwordagn: passwordagn,
        card: card,
    };

    // checking both passwords are same or not
    if (password == passwordagn) {
        userInfo.push(userData);
        localStorage.setItem("userDataBase", JSON.stringify(userInfo));
        alert("Signup Completed!")
        // window.location.href = "login.html";
    }

    else {
        alert("Password Miss-Match")
        window.location.reload();
    }


}
export default formSubmit;