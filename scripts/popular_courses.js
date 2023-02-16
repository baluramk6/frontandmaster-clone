
function allPopularcourses(data, container) {

    data.forEach(el => {

        let div1 = document.createElement("div");
        div1.id = "div1";


        //for image div is created
        let div2 = document.createElement("div");
        div2.id = "div2";

        let bimage = document.createElement("img");
        bimage.id = "bimage"
        bimage.src = el.bgimage;

        div2.append(bimage)


        let div3 = document.createElement("div");
        div3.id = "div3";

        //div for heading
        let div3a = document.createElement("div");
        div3a.id = "div3a";
        let head = document.createElement("h2");
        head.innerText = el.title;

        div3a.append(head)


        //outer div for image and name to get append

        let div3b = document.createElement("div");
        div3b.id = "div3b";
        // div3b.style="display:flex";
        //div for image

        let div3b1 = document.createElement("div");
        div3b1.id = "div3b1"

        let pimage = document.createElement("img");
        pimage.id = "pimage";
        pimage.src = el.image;

        //appending image in div3b1
        div3b1.append(pimage)

        //div for name and comapany
        let div3b2 = document.createElement("div");
        div3b2.id = "div3b2";

        let name = document.createElement("p");
        name.innerText = el.name;
        //append 
        let company = document.createElement("p");
        company.id = "company";
        company.innerText = el.company;

        div3b2.append(name, company)

        div3b.append(div3b1, div3b2);


        //------------------------->

        let div3c = document.createElement("div");
        div3c.id = "div3c";

        let about = document.createElement("p");
        about.innerText = el.about;
        div3c.append(about)//appending for text

        let div3d = document.createElement("div");
        let time = document.createElement("p");
        time.id = "time"
        time.innerText = el.time;
        div3d.append(time)//appending for time




        let div3e = document.createElement("div");
        div3e.id = "div3e";

        let button1 = document.createElement("button");
        button1.id = "button1";
        button1.textContent = "Watch Free Preview";

        button1.addEventListener("click", function () {
            window.location.href = "coursesnew.html"
        })



        let button2 = document.createElement("button");
        button2.id = "button2";
        button2.textContent = "Get Full Access";
        button2.addEventListener("click", () => {
            window.location.href = "pricing.html"
        })

        div3e.append(button1, button2);



        div3.append(div3a, div3b, div3c, div3d, div3e)

        div1.append(div2, div3)

        container.append(div1)


    });

}

export { allPopularcourses }















