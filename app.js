(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
var typed = new Typed(".typing",{
    strings: ["Full Stack Developer", "Graphics Designer", "CSE Undergrad","Data Science Enthusiast","Cloud Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
});
var typed2 = new Typed(".typing-2",{
    strings: ["Google Cloud", "Azure", "AWS","ML|AI","App Dev","Cyber Security","DevOps"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
});
typed();
typed2();
