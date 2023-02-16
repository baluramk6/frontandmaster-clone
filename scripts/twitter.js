
var twitterData = [{
    Title: "Negar Jamalifard",
    UserName: "@NegarDev",
    Twitt: "I think I should subscribe to @FrontendMasters for life. The courses are super rich and on point. Never had this level of satisfaction with any education platforms.",
    Time: "8:56pm · Dec 16, 2021 ",
    Image: "https://pbs.twimg.com/profile_images/1323722809168809990/1Fm6IBuY_reasonably_small.jpg",
    Twitter_icon: "https://pngimg.com/uploads/twitter/twitter_PNG9.png",
},
{
    Title: "brennan.eth",
    UserName: "@brennandoteth",
    Twitt: "@mathesondavid @FrontendMasters Without a doubt, @FrontendMasters has been one of, if not the best, resources for learning new topics, techniques, and technologies.",
    Time: "4: 56pm · Dec 16, 2021",
    Image: "https://pbs.twimg.com/profile_images/1426593683474948096/slmgOn-I_reasonably_small.jpg",
    Twitter_icon: "https://pngimg.com/uploads/twitter/twitter_PNG9.png",
},
{
    Title: "Bhargav",
    UserName: "@codewithbhargav",
    Twitt: "Madly appreciate @FrontendMasters. Their Typescript courses are incredible! 🎉🎉",
    Time: "12:54pm · Nov 30, 2021 ",
    Image: "https://pbs.twimg.com/profile_images/1352128808283848704/LQYfHXBp_reasonably_small.jpg",
    Twitter_icon: "https://pngimg.com/uploads/twitter/twitter_PNG9.png",
},
{
    Title: "Kevin Powell",
    UserName: "@KevinJPowell",
    Twitt: "@AlveeAkand @elyktrix @FrontendMasters Yes! @FrontendMasters is amazing. Super talented educators and quality content.",
    Time: "10:44pm · Oct 11, 2020",
    Image: "https://pbs.twimg.com/profile_images/1441440444429357056/63gb2BFR_reasonably_small.jpg",
    Twitter_icon: "https://pngimg.com/uploads/twitter/twitter_PNG9.png",
},
{
    Title: "Dave Halewood",
    UserName: "@Dave_Coding",
    Twitt: "@kieranmv95 @FrontendMasters Yes definitely, I’ve had membership for a couple of years, really good content given by top instructors.",
    Time: "8:33pm · Oct 5, 2020",
    Image: "https://pbs.twimg.com/profile_images/1057964722585305088/jZJUDPhj_reasonably_small.jpg",
    Twitter_icon: "https://pngimg.com/uploads/twitter/twitter_PNG9.png",
},
{
    Title: "AJ Thompson",
    UserName: "@hashtagdad817",
    Twitt: "@acandael @scotups @FrontendMasters @FrontendMasters always delivers great courses. I’ve taken all of @scotups. He teaches in a way that feels like a conversation amongst friends.",
    Time: "3:57pm · Oct 11, 2020",
    Image: "http://pbs.twimg.com/profile_images/1236097570637844486/YNWHjUtv_400x400",
    Twitter_icon: "https://pngimg.com/uploads/twitter/twitter_PNG9.png",
}]

let colorArr = ['red', 'blue', 'green', 'gold', 'purple', 'gray', 'orange']
function showTwitt(main) {
    twitterData.forEach((elem) => {

        // let random1 = Math.floor(Math.random() * 10)
        // let random2 = Math.floor(Math.random() * 10)
        //let rand = Math.floor(Math.random(colorArr.length) * 9)

        let main_div = document.createElement("div")
        main_div.id = "main_div"

        let user_div = document.createElement("div")
        user_div.id = "user_div"

        let twitt_div = document.createElement("div")
        twitt_div.id = "twitt_div"

        let name_div = document.createElement("div")
        name_div.id = "name_div"

        let name = document.createElement("p")
        name.id = "name"
        let n = name.textContent = elem.Title

        let user_name = document.createElement("p")
        user_name.id = "user_name"
        user_name.textContent = elem.UserName

        let image = document.createElement("h1")
        image.id = "image"
        image.innerHTML = n[0];
        //image.style.backgroundColor = `#${random1}d${random2}d0d`
        image.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)]


        let icon = document.createElement("img")
        icon.id = "icon"
        icon.src = elem.Twitter_icon

        let twitt = document.createElement("p")
        twitt.id = "twitt"
        twitt.textContent = elem.Twitt

        let time = document.createElement("p")
        time.id = "time"
        time.textContent = elem.Time

        name_div.append(n, user_name)
        user_div.append(image, name_div)
        twitt_div.append(twitt)

        main_div.append(user_div, twitt_div, time)


        main.append(main_div)
    })

}

export { showTwitt }