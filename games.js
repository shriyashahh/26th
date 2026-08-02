const fanfare = document.getElementById("fanfare");
const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");
const run2 = document.getElementById("run2");

const giggle = document.getElementById("giggle");
const yay = document.getElementById("yay");

const splat = document.getElementById("splat");

const dig = document.getElementById("dig");

const minerGiggle = document.getElementById("minerGiggle");

const king = document.getElementById("king");
const kingConfetti = document.getElementById("kingConfetti");

const speech = document.getElementById("speech");
const battleText = document.getElementById("battleText");

const arena = document.querySelector(".arena");

const balloons = document.querySelectorAll(".balloon");
const confettiGoblins = document.querySelectorAll(".confettiGoblin");

const cakeGoblin = document.getElementById("cakeGoblin");

const fallenCake = document.getElementById("fallenCake");

const miner = document.getElementById("miner");

let confettiInterval;

window.onload = () => {

    king.style.opacity = "1";

    fanfare.play();

    setTimeout(() => {

        battleText.innerHTML = "❄️ BATTLE FROZEN ❄️";

    }, 1000);

    setTimeout(() => {

        speech.style.opacity = "1";

        kingVoice.play();

    }, 1800);

    setTimeout(() => {

        speech.style.opacity = "0";

        battleText.style.opacity = "0";

        king.style.opacity = "0";

        kingConfetti.style.display = "block";

        kingConfetti.classList.add("kingTop");

        kingConfetti.style.opacity = "1";

        arena.classList.add("party");

        startConfetti();

        startGoblins();

    }, 7000);
};

function startGoblins() {

    run1.play();

    setTimeout(() => run2.play(), 500);

    balloons.forEach((g, i) => {

        setTimeout(() => g.classList.add("show"), i * 300);

    });

    confettiGoblins.forEach((g, i) => {

        setTimeout(() => g.classList.add("show"), i * 250);

    });

    setTimeout(() => {

        cakeGoblin.classList.add("show");

    }, 700);

    setTimeout(() => {

        balloons.forEach(g => g.classList.add("bounce"));

        confettiGoblins.forEach(g => g.classList.add("bounce"));

        cakeGoblin.classList.add("bounce");

        giggle.play();

        yay.play();

    }, 3500);

    setTimeout(dropCake, 5500);
}

function startConfetti() {

    confettiInterval = setInterval(() => {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = (window.innerWidth / 2 - 180 + Math.random() * 360) + "px";

        c.style.top = "-20px";

        c.style.background =

            ["gold", "#ff5e5e", "#00bfff", "#4caf50"][
                Math.floor(Math.random() * 4)
            ];

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 3000);

    }, 90);
}

function dropCake() {

    clearInterval(confettiInterval);

    run1.pause();

    run2.pause();

    giggle.pause();

    yay.pause();

    splat.play();

    balloons.forEach(g => g.classList.remove("bounce"));

    confettiGoblins.forEach(g => {

        g.classList.remove("bounce");

        g.src = "assets/battle/goblin_panick.png";

    });

    cakeGoblin.style.opacity = "0";

    fallenCake.classList.add("show");

    setTimeout(showMiner, 1800);
}

function showMiner() {

    dig.play();

    miner.classList.add("show");

    setTimeout(() => {

        minerGiggle.play();

    }, 1200);

    setTimeout(() => {

        miner.style.bottom = "-220px";

    }, 3500);
}
