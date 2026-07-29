document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".envelope-container");
    const envelope = document.querySelector(".envelope");
    const seal = document.querySelector(".wax-seal");

    container.classList.add("show");

    seal.addEventListener("click", () => {

        // Pop the seal away
        seal.style.transform = "translateX(-50%) scale(0)";
        seal.style.opacity = "0";

        // Open the envelope
        setTimeout(() => {
            envelope.classList.add("open");
        }, 250);

        // Go to the letter page later
        setTimeout(() => {
            // window.location.href = "letter.html";
            console.log("Envelope opened!");
        }, 1800);

    });

});
