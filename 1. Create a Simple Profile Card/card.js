
const socialMediaLinks = {
    github: "https://github.com/BhupendraMaurya",
    gfg: "https://www.geeksforgeeks.org/user/bhupendrameazn/",
    leetcode: "https://leetcode.com/u/BhupendraMaurya/",
    linkedin: "https://www.linkedin.com/in/bhupendra-maurya-480543212/?trk=opento_sprofile_details",
    codingNinjas: "https://www.naukri.com/code360/profile/7e0effc7-5ef5-4bc9-aa97-381ed81c4b4b"
};


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("github").addEventListener("click", function () {
        window.open(socialMediaLinks.github, "_blank");
    });

    document.getElementById("gfg").addEventListener("click", function () {
        window.open(socialMediaLinks.gfg, "_blank");
    });

    document.getElementById("leetcode").addEventListener("click", function () {
        window.open(socialMediaLinks.leetcode, "_blank");
    });

    document.getElementById("linkedin").addEventListener("click", function () {
        window.open(socialMediaLinks.linkedin, "_blank");
    });

    document.getElementById("codingNinjas").addEventListener("click", function () {
        window.open(socialMediaLinks.codingNinjas, "_blank");
    });
});
