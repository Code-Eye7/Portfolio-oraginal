/* ======typing animation ====== */
var typed = new Typed(".typing", {
    strings: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* ===== Aside bar ===== */

// var nav = document.querySelector(".nav");
// navList = nav.querySelectorAll("li");
// totalNavList = navList.length,
//     allSection = document.querySelectorAll(".section"),
//     totalNavList = allSection.length;
// for (let i = 0; i < totalNavList; i++) {
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click", function () {
//         for (let j = 0; j < totalNavList; j++) {
//             navList[j].querySelector("a").classList.remove(".active");
//         }
//         this.classList.add("active");
//         function showSection(this);
//     })

// };

// function showSection(element) {
//     for (let i = 0; i < totalSection; i++) {
//         allSection[i].classList.remove("active")
//     };
//     const target = element.getAttribute("href").split("#")[1];
//     document.querySelector("#" + target).classList.add("active");
// };