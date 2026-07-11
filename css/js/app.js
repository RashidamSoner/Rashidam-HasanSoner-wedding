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
