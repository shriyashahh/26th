document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".envelope-container");
    const seal = document.querySelector(".wax-seal");
    const flap = document.querySelector(".envelope-flap");

    // Show the envelope when the page loads
    container.classList.add("show");

    // Open the envelope
    seal.addEventListener("click", () => {

        // Hide the seal
        seal.style.transform = "translateX(-50%) scale(0)";
        seal.style.opacity = "0";

        // Open the flap after a short delay
        setTimeout(() => {
            flap.style.transform = "rotateX(180deg)";
        }, 300);

    });

});
