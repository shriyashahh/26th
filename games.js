const fanfare = document.getElementById("fanfare");
const kingVoice = document.getElementById("kingVoice");

const king = document.getElementById("king");
const kingConfetti = document.getElementById("kingConfetti");

const speech = document.getElementById("speech");
const battleText = document.getElementById("battleText");

const arena = document.getElementById("arena");

const balloons = document.querySelectorAll(".balloon");
const confettiGoblins = document.querySelectorAll(".confettiGoblin");

const cakeGoblin = document.getElementById("cakeGoblin");

window.onload = async () => {

    await fanfare.play();

    king.style.opacity = "1";

    setTimeout(() => {

        kingVoice.play();

        speech.style.opacity = "1";

    }, 1200);

    kingVoice.onended = () => {

        battleText.style.opacity = "0";

        speech.style.opacity = "0";

        arena.classList.add("party");

        king.style.opacity = "0";

        kingConfetti.style.display = "block";

        kingConfetti.style.opacity = "1";

        kingConfetti.classList.add("king-top");

        startConfetti();

        startGoblins();
    };
};

function startGoblins() {

    balloons.forEach((goblin, i) => {

        setTimeout(() => {

            goblin.classList.add("show");
            goblin.classList.add("running");

        }, i * 500);

    });

    confettiGoblins.forEach((goblin, i) => {

        setTimeout(() => {

            goblin.classList.add("show");
            goblin.classList.add("running");

        }, i * 350);

    });

    setTimeout(() => {

        cakeGoblin.classList.add("show");
        cakeGoblin.classList.add("running");

    }, 900);
}

function startConfetti() {

    setInterval(() => {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.background =

            ["#ffeb3b", "#4caf50", "#2196f3", "#ff4081", "#ff9800"]

            [Math.floor(Math.random() * 5)];

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 3000);

    }, 120);
}
