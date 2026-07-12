// Premium Wedding Invitation
// Rashidam & Hasan Soner

const intro = document.getElementById("intro");
const button = document.getElementById("openInvitation");
const bgMusic = document.getElementById("bgMusic");
const seal = document.querySelector(".wax-seal");
seal.addEventListener("click", () => {

    seal.style.transform = "scale(.88) rotate(-8deg)";
    seal.style.transition = ".35s ease";

    bgMusic.volume = 0;
    bgMusic.play().catch(() => {});

    let volume = 0;

    const fadeMusic = setInterval(() => {

        volume += 0.05;

        if (volume >= 1) {

            volume = 1;
            clearInterval(fadeMusic);

        }

        bgMusic.volume = volume;

    }, 120);

    setTimeout(() => {

        intro.style.opacity = "0";
        intro.style.transform = "scale(1.03)";
        intro.style.pointerEvents = "none";

    }, 350);

    setTimeout(() => {

        intro.style.display = "none";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1500);

});
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
const weddingDate = new Date("August 21, 2026 19:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);
window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.documentElement.style.setProperty(
        "--scroll",
        scrollY
    );

});
