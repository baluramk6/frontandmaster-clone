// Footer HTML Code

function footer() {

    return `
    <div id="header-main">

    <div id="header-sub">
        <div class="header-div" id="header-btn-div">
            <a href=""><img id="main-footer-logo"
            src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg"
            alt=""></a>
           <a class="header-btn" href="./courses.html">Courses</a>
           <a class="header-btn" href="">Learn</a>
           <a class="header-btn" href="">Workshops</a>
           <a class="header-btn" href="">Teachers</a>
           <a class="header-btn" href="">Guides</a>
           <a class="header-btn" href="">FAQ</a>
        </div>

        <div id="header-store-div">
            <a href="https://appstore.com/mjginternationalllc/frontendmasters"> <img width="135px" height="46px" id="applestore-logo"
                    src="https://developer.apple.com/assets/elements/icons/download-on-the-app-store/download-on-the-app-store.svg"
                    alt=""> </a>
            <a href="https://play.google.com/store/apps/details?id=in.mjg.frontendmasters.store&utm_source=frontendmasters_com&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img width="170px" height="66px" id="playstore-logo"
                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                    alt="">
            </a>
        </div>

        <div class="header-div" id="header-social-div">
            <div id="header-social-sub-div-1">
                <a href="https://twitter.com/FrontendMasters"><svg class="social-icon" version="1.1" id="icon-social-twitter"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" viewBox="0 0 410.155 410.155" style="" xml:space="preserve"
                        width="410.155" height="410.155">
                        <path style="" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
                    l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
                    c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
                    c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
                    c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
                    c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
                    c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
                    c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
                    c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
                    c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
                    c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
                    c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
                    l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z" fill="#76A9EA"></path>
                    </svg></a>

                <a href="https://www.linkedin.com/company/frontend-masters/"><svg class="social-icon" xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="" width="35"
                        height="35">
                        <path
                            d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z"
                            fill="#0177B5" style=""></path>
                        <path
                            d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z"
                            fill="#FFFFFF" style=""></path>
                    </svg></a>

                <a href="https://www.facebook.com/FrontendMasters">
                    <svg class="social-icon" id="icon-social-facebook" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" viewBox="0 0 408.788 408.788" style="" xml:space="preserve"
                        width="408.788" height="408.788">
                        <path style="" d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
                            h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
                            v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
                            l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
                            c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
                            C408.786,24.662,384.124,0,353.701,0z" fill="#475993"></path>
                    </svg>
                </a>

                <a href="https://www.instagram.com/FrontendMasters/"><svg class="social-icon" version="1.1" id="icon-social-instagram"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" viewBox="0 0 551.034 551.034" style="" xml:space="preserve"
                        width="551.034" height="551.034">
                        <defs>
                            <linearGradient id="INSTASVG_1_" gradientUnits="userSpaceOnUse" x1="275.517"
                                y1="4.57" x2="275.517" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <linearGradient id="INSTASVG_2_" gradientUnits="userSpaceOnUse" x1="275.517"
                                y1="4.57" x2="275.517" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <linearGradient id="INSTASVG_3_" gradientUnits="userSpaceOnUse" x1="418.31"
                                y1="4.57" x2="418.31" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <linearGradient id="INSTASVG_1_" gradientUnits="userSpaceOnUse" x1="275.517"
                                y1="4.57" x2="275.517" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <linearGradient id="INSTASVG_2_" gradientUnits="userSpaceOnUse" x1="275.517"
                                y1="4.57" x2="275.517" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <linearGradient id="INSTASVG_3_" gradientUnits="userSpaceOnUse" x1="418.31"
                                y1="4.57" x2="418.31" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <linearGradient id="INSTASVG_1_" gradientUnits="userSpaceOnUse" x1="275.517"
                                y1="4.57" x2="275.517" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <path style="" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
                c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
                C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
                c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
                c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
                                fill="url(&quot;#INSTASVG_1_&quot;)"></path>
                            <linearGradient id="INSTASVG_2_" gradientUnits="userSpaceOnUse" x1="275.517"
                                y1="4.57" x2="275.517" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <path style=""
                                d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517
                S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083
                s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"
                                fill="url(&quot;#INSTASVG_2_&quot;)"></path>

                            <linearGradient id="INSTASVG_3_" gradientUnits="userSpaceOnUse" x1="418.31"
                                y1="4.57" x2="418.31" y2="549.72"
                                gradientTransform="matrix(1 0 0 -1 0 554)">
                                <stop offset="0" style="stop-color:#E09B3D"></stop>
                                <stop offset="0.3" style="stop-color:#C74C4D"></stop>
                                <stop offset="0.6" style="stop-color:#C21975"></stop>
                                <stop offset="1" style="stop-color:#7024C4"></stop>
                            </linearGradient>
                            <circle style="" cx="418.31" cy="134.07" r="34.15"
                                fill="url(&quot;#INSTASVG_3_&quot;)"></circle>
                        </g>
                    </svg></a>
            </div>
            <div id="header-social-sub-div-2">
                <p id="footer-email">Email: <a id="footer-email-address" href="">support@frontendmasters.com</a></p>
            </div>

        </div>
        <div id="copyright-div">
            <div id="copyright-div-left">
                <p>Frontend Masters is proudly made in Minneapolis, MN </p>
            </div>
            <div id="copyright-div-right">
                <p class="copyright-option">© 2021 Frontend Masters</p>
                <a class="copyright-option hover-1" href="">Terms of Service</a>
                <a class="copyright-option hover-1" href="">Privacy Policy</a>
            </div>
        </div>
    </div>
</div>
`
}

export default footer