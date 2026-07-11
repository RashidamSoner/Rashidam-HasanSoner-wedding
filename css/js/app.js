// Premium Wedding Invitation
// Rashidam & Hasan Soner

const intro = document.getElementById("intro");
const button = document.getElementById("openInvitation");

button.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

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
