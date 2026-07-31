const fanfare = document.getElementById("fanfare");
const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");
const run2 = document.getElementById("run2");

const king = document.getElementById("king");
const kingConfetti = document.getElementById("kingConfetti");

const speech = document.getElementById("speech");
const battleText = document.getElementById("battleText");

const arena = document.getElementById("arena");

const balloons = document.querySelectorAll(".balloon");
const confettiGoblins = document.querySelectorAll(".confettiGoblin");

const cakeGoblin = document.getElementById("cakeGoblin");

window.onload = async () => {

    king.style.opacity = "1";

    fanfare.play();

    setTimeout(() => {

        kingVoice.play();

        speech.style.opacity = "1";

    }, 1200);

    kingVoice.onended = () => {

        battleText.style.display = "none";

        speech.style.opacity = "0";

        arena.classList.add("party");

        king.style.opacity = "0";

        kingConfetti.style.display = "block";

        kingConfetti.style.opacity = "1";

        kingConfetti.classList.add("kingTop");

        startConfetti();

        setTimeout(() => {

            startGoblins();

        }, 600);
    };
};

function startGoblins() {

    run1.loop = true;
    run2.loop = true;

    run1.volume = 0.35;
    run2.volume = 0.25;

    run1.play();

    setTimeout(() => {

        run2.play();

    }, 700);

    balloons.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");
            goblin.classList.add("running");

        }, index * 500);

    });

    confettiGoblins.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");
            goblin.classList.add("running");

        }, index * 350);

    });

    setTimeout(() => {

        cakeGoblin.classList.add("show");
        cakeGoblin.classList.add("running");

    }, 900);
}

function startConfetti() {

    setInterval(() => {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        const colors = [

            "#ffeb3b",
            "#4caf50",
            "#2196f3",
            "#ff4081",
            "#ff9800"
        ];

        confetti.style.background =

            colors[Math.floor(Math.random() * colors.length)];

        const center = window.innerWidth / 2;

        confetti.style.left =

            center - 140 + Math.random() * 280 + "px";

        confetti.style.top = "-20px";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 3000);

    }, 100);
}
