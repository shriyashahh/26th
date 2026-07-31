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

window.onload = () => {

    battleText.innerHTML = "⚔️ BATTLE IN PROGRESS ⚔️";

    king.style.opacity = "1";

    fanfare.play();

    setTimeout(() => {

        kingVoice.play();

        speech.style.opacity = "1";

    }, 1200);

    kingVoice.onended = () => {

        battleText.innerHTML = "❄️ BATTLE FREEZE ❄️";

        setTimeout(() => {

            battleText.style.opacity = "0";

        }, 1800);

        speech.style.opacity = "0";

        king.style.opacity = "0";

        setTimeout(() => {

            king.style.display = "none";

            kingConfetti.style.display = "block";

            kingConfetti.style.opacity = "1";

            kingConfetti.classList.add("kingTop");

            arena.classList.add("party");

            startConfetti();

            startGoblins();

        }, 700);

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

    }, 800);


    balloons.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");

        }, index * 400);

    });


    confettiGoblins.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");

        }, 700 + index * 350);

    });


    setTimeout(() => {

        cakeGoblin.classList.add("show");

    }, 1200);

}

function startConfetti() {

    setInterval(() => {

        const piece = document.createElement("div");

        piece.className = "confetti";

        const colors = [

            "#ffd700",
            "#ff4081",
            "#4caf50",
            "#2196f3",
            "#ff9800"

        ];

        piece.style.background =

            colors[Math.floor(Math.random() * colors.length)];

        const center = window.innerWidth / 2;

        piece.style.left =

            center - 250 + Math.random() * 500 + "px";

        piece.style.top = "-20px";

        piece.style.transform =

            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 3500);

    }, 80);

}
