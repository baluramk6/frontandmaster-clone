// This function for navbar

function navbar() {
    return `
    <div id="navbar-main-div">
        <div id="navbar-logo-div">
            <a href="./index.html"> <img id="main-logo"
                    src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg"
                    alt=""> </a>
        </div>
        <div id="navbar-menu-div">
            <a class="navbar-menu-btn" href="./courses.html">Courses</a>
            <a class="navbar-menu-btn" href="./learnpage.html">Learn</a>
            <a class="navbar-menu-btn" href="./pricing.html">Pricing</a>
            <a class="navbar-menu-btn" href="./login.html">Login</a>
            <a class="navbar-menu-btn" id="navbar-join-btn" href="./pricing.html">Join Now</a>
            <div id="logout-btn-div"> </div>
        </div>
    </div>
    `
}

export default navbar