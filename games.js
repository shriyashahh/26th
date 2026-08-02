const fanfare = document.getElementById("fanfare");
const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");
const run2 = document.getElementById("run2");

const giggle = document.getElementById("giggle");
const yay = document.getElementById("yay");

const splat = document.getElementById("splat");
const digging = document.getElementById("digging");

const minerLaugh = document.getElementById("minerLaugh");
const crowd = document.getElementById("crowd");

const king = document.getElementById("king");
const kingConfetti = document.getElementById("kingConfetti");

const speech = document.getElementById("speech");
const battleText = document.getElementById("battleText");

const arena = document.getElementById("arena");

const balloons = document.querySelectorAll(".balloon");
const confettiGoblins = document.querySelectorAll(".confettiGoblin");

const cakeGoblin = document.getElementById("cakeGoblin");

const fallenCake = document.getElementById("fallenCake");

const extraGoblin = document.getElementById("extraGoblin");

const miner = document.getElementById("miner");

const goblinBubble = document.getElementById("goblinBubble");

const celebrationScreen =
    document.getElementById("celebrationScreen");

let confettiInterval;



// ---------------- START ----------------

window.onload = () => {

    king.style.opacity = "1";

    fanfare.play();

    // battle frozen

    setTimeout(() => {

        battleText.innerHTML = "❄️ BATTLE FROZEN ❄️";

    }, 1000);


    // king speech starts

    setTimeout(() => {

        speech.style.opacity = "1";

        kingVoice.play();

    }, 1800);


    // after speech ends

    kingVoice.onended = () => {

        speech.style.opacity = "0";

        setTimeout(() => {

            moveKing();

        }, 1500);
    };
};



// ---------------- MOVE KING ----------------

function moveKing() {

    battleText.style.opacity = "0";

    king.style.opacity = "0";

    kingConfetti.style.opacity = "1";

    kingConfetti.classList.add("kingTop");

    startConfetti();

    setTimeout(() => {

        startGoblins();

    }, 300);
}



// ---------------- CONFETTI ----------------

function startConfetti() {

    confettiInterval = setInterval(() => {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        const colors = [

            "#ffd700",
            "#ff6a00",
            "#ff4fa0",
            "#00d4ff",
            "#7dff58"

        ];

        confetti.style.background =

            colors[Math.floor(Math.random() * 5)];

        confetti.style.left =

            (window.innerWidth / 2 - 220 +

                Math.random() * 440) + "px";

        confetti.style.top = "-20px";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 3500);

    }, 80);
}



// ---------------- GOBLINS ----------------

function startGoblins() {

    run1.loop = true;

    run2.loop = true;

    run1.volume = 0.4;

    run2.volume = 0.25;

    run1.play();

    setTimeout(() => {

        run2.play();

    }, 900);



    balloons.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");

        }, index * 700);

    });



    confettiGoblins.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");

        }, index * 600);

    });



    setTimeout(() => {

        cakeGoblin.classList.add("show");

    }, 1800);



    // bounce starts

    setTimeout(() => {

        balloons.forEach(g => {

            g.classList.add("bounce");

        });

        confettiGoblins.forEach(g => {

            g.classList.add("bounce");

        });

        cakeGoblin.classList.add("bounce");

        giggle.play();

        yay.play();

    }, 5200);



    // cake falls

    setTimeout(() => {

        dropCake();

    }, 10500);
}



// ---------------- CAKE FALL ----------------

function dropCake() {

    clearInterval(confettiInterval);

    splat.play();

    run1.pause();

    run2.pause();

    giggle.pause();

    yay.pause();

    balloons.forEach(g => {

        g.classList.remove("bounce");

    });

    confettiGoblins.forEach(g => {

        g.classList.remove("bounce");

    });

    cakeGoblin.classList.remove("bounce");

    cakeGoblin.style.opacity = "0";

    fallenCake.classList.add("show");



    // one second pause

    setTimeout(() => {

        panicMode();

    }, 1000);
}



// ---------------- PANIC ----------------

function panicMode() {

    balloons.forEach(g => {

        g.src = "assets/battle/goblin_panic.png";

    });

    confettiGoblins.forEach(g => {

        g.src = "assets/battle/goblin_panic.png";

    });

    extraGoblin.classList.add("show");



    setTimeout(() => {

        goblinBubble.classList.add("show");

    }, 1000);



    setTimeout(() => {

        arena.classList.add("shake");

        digging.play();

    }, 2500);



    setTimeout(() => {

        showMiner();

    }, 5500);
}



// ---------------- MINER ----------------

function showMiner() {

    arena.classList.remove("shake");

    digging.pause();

    digging.currentTime = 0;

    fallenCake.style.opacity = "0";

    miner.classList.add("show");

    minerLaugh.play();



    setTimeout(() => {

        giggle.currentTime = 0;

        giggle.play();

    }, 1000);



    setTimeout(() => {

        finalCelebration();

    }, 5000);
}



// ---------------- FINAL SCREEN ----------------

function finalCelebration() {

    // hide everything

    kingConfetti.style.opacity = "0";

    king.style.opacity = "0";

    speech.style.opacity = "0";

    battleText.style.opacity = "0";

    goblinBubble.style.opacity = "0";

    miner.style.opacity = "0";

    fallenCake.style.opacity = "0";

    extraGoblin.style.opacity = "0";


    balloons.forEach(goblin => {

        goblin.style.opacity = "0";

    });

    confettiGoblins.forEach(goblin => {

        goblin.style.opacity = "0";

    });

    cakeGoblin.style.opacity = "0";


    // remove arena background

    arena.style.background = "#08101f";


    // show celebration image

    celebrationScreen.style.display = "block";

    celebrationScreen.classList.add("show");


    // keep cheering forever

    crowd.loop = true;
    crowd.play();
}
