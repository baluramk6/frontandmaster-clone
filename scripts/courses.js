
function allCourses(Allcourses, main) {

    Allcourses.forEach(ele => {

        let div_main = document.createElement("div")
        div_main.id = "div_main"
        let bgUrl = ele.bgimage;
        div_main.style.backgroundImage = `url(${bgUrl})`;

        let content_div = document.createElement("div")
        content_div.id = "content_div"

        let courses_h1 = document.createElement("h1")
        courses_h1.id = "courses_h1"
        courses_h1.textContent = ele.title

        let profile_div = document.createElement("div")
        profile_div.id = "profile_div"

        let profile_img = document.createElement("img")
        profile_img.id = "profile_img"
        profile_img.src = ele.image

        let name_div = document.createElement("div")
        name_div.id = "name_div"

        let p_name = document.createElement("p")
        p_name.id = "p_name"
        p_name.textContent = ele.name

        let company = document.createElement("p")
        company.id = "company"
        company.textContent = ele.company

        let discription = document.createElement("p")
        discription.id = "discription"
        discription.textContent = ele.about

        let time = document.createElement("p")
        time.id = "time"
        time.textContent = ele.time

        let btn_div = document.createElement("div")
        btn_div.id = "btn_div"

        let btn1 = document.createElement("button")
        btn1.id = "btn1"
        btn1.textContent = "Watch Free Preview"
        btn1.addEventListener("click", () => {
            window.location.href = "coursesnew.html"
        })

        let btn2 = document.createElement("button")
        btn2.id = "btn2"
        btn2.textContent = "Get Full Access"
        btn2.addEventListener("click", () => {
            let login = (localStorage.getItem("loginCheck"))
            if (login === "true") {
                window.location.href = "checkout.html";
            } else {
                window.location.href = "login.html";
            }

        }
        )
        name_div.append(p_name, company)
        profile_div.append(profile_img, name_div)
        btn_div.append(btn1, btn2)

        content_div.append(courses_h1, profile_div, discription, time, btn_div)

        div_main.append(content_div)

        main.append(div_main);
    });
}


export { allCourses };