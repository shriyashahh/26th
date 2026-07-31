const fanfare = document.getElementById("fanfare");
const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");
const run2 = document.getElementById("run2");

const giggle = document.getElementById("giggle");
const yay = document.getElementById("yay");

const king = document.getElementById("king");
const kingConfetti = document.getElementById("kingConfetti");

const speech = document.getElementById("speech");
const battleText = document.getElementById("battleText");

const arena = document.getElementById("arena");

const balloons = document.querySelectorAll(".balloon");
const confettiGoblins = document.querySelectorAll(".confettiGoblin");
const cakeGoblin = document.getElementById("cakeGoblin");

window.onload = () => {

    king.style.opacity = "1";

    fanfare.play();

    // BATTLE FROZEN

    setTimeout(() => {

        battleText.innerHTML = "❄️ BATTLE FROZEN ❄️";

    }, 900);

    // KING SPEECH

    setTimeout(() => {

        speech.style.opacity = "1";

        kingVoice.play();

    }, 1700);

    kingVoice.onended = () => {

        speech.style.opacity = "0";

        battleText.style.opacity = "0";

        king.style.opacity = "0";

        kingConfetti.style.display = "block";

        setTimeout(() => {

            kingConfetti.style.opacity = "1";
            kingConfetti.classList.add("kingTop");

        }, 100);

        arena.classList.add("party");

        startConfetti();

        setTimeout(() => {

            startGoblins();

        }, 500);
    };
};

function startGoblins() {

    run1.loop = true;
    run2.loop = true;

    run1.volume = 0.4;
    run2.volume = 0.25;

    run1.play();

    setTimeout(() => run2.play(), 600);

    balloons.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");

        }, index * 350);

    });

    confettiGoblins.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");

        }, index * 250);

    });

    setTimeout(() => {

        cakeGoblin.classList.add("show");

    }, 700);

    setTimeout(() => {

        run1.pause();
        run2.pause();

        balloons.forEach(g => g.classList.add("bounce"));
        confettiGoblins.forEach(g => g.classList.add("bounce"));
        cakeGoblin.classList.add("bounce");

        giggle.play();

        setTimeout(() => {

            yay.play();

        }, 400);

    }, 3800);
}

function startConfetti() {

    setInterval(() => {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        const colors = [

            "#ffd700",
            "#ff5e5e",
            "#4caf50",
            "#00bfff",
            "#ff77ff"

        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left =
            (window.innerWidth / 2 - 180 + Math.random() * 360) + "px";

        confetti.style.top = "-20px";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 3500);

    }, 80);
}
