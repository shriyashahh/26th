document.addEventListener("DOMContentLoaded", () => {

const container = document.querySelector(".envelope-container");
const envelope = document.querySelector(".envelope");
const seal = document.querySelector(".wax-seal");
const flap = document.querySelector(".envelope-flap");

setTimeout(() => {
    container.classList.add("show");
}, 500);


// Camera slowly zooms in
setTimeout(() => {
    document.body.classList.add("zoom");
}, 1200);


seal.addEventListener("click", () => {

    seal.style.pointerEvents = "none";

    // Seal melts away
    seal.style.transform = "translateX(-50%) scale(0)";
    seal.style.opacity = "0";

    // Open flap
    setTimeout(() => {
        flap.classList.add("open");
    }, 350);

    // Pull envelope forward
    setTimeout(() => {
        envelope.classList.add("opened");
    }, 900);

    // Next page
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 3300);

});

});
