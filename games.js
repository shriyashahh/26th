const battleText = document.getElementById("battleText");

const overlay = document.getElementById("overlay");

const arena = document.getElementById("arena");

const king = document.getElementById("king");

const kingConfetti = document.getElementById("kingConfetti");

const speech = document.getElementById("speech");

const fanfare = document.getElementById("fanfare");

const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");

const run2 = document.getElementById("run2");

const giggle = document.getElementById("giggle");

const yay = document.getElementById("yay");


// freeze battle

setTimeout(() => {

    battleText.innerHTML = "⏸️ BATTLE FROZEN ⏸️";

    overlay.style.background = "rgba(0,0,0,0.75)";

    fanfare.play();

    king.style.bottom = "0px";

    king.style.opacity = "1";

    speech.style.opacity = "1";

}, 3000);


// king voice

setTimeout(() => {

    kingVoice.play();

}, 4300);


// after speech

kingVoice.onended = () => {

    battleText.style.opacity = "0";

    speech.style.opacity = "0";

    king.style.opacity = "0";

    kingConfetti.style.bottom = "0px";

    kingConfetti.style.opacity = "1";

    createConfetti();

    yay.play();

    setTimeout(() => {

        arena.classList.add("party");

        kingConfetti.classList.add("kingTop");

        startGoblins();

    }, 1500);

};


function startGoblins() {

    const balloons = document.querySelectorAll(".balloon");

    balloons.forEach((g, i) => {

        setTimeout(() => {

            g.style.opacity = "1";

            g.style.animation =
                "rightToLeft 7s linear forwards";

            run1.currentTime = 0;

            run1.play();

        }, i * 900);

    });

    const confettiGoblins =
        document.querySelectorAll(".confettiGoblin");

    confettiGoblins.forEach((g, i) => {

        setTimeout(() => {

            g.style.opacity = "1";

            g.style.animation =
                "diagonal 6s linear forwards";

            giggle.currentTime = 0;

            giggle.play();

        }, 1200 + i * 700);

    });

    setTimeout(() => {

        const cake = document.getElementById("cakeGoblin");

        cake.style.opacity = "1";

        cake.style.animation =
            "leftToRight 8s linear forwards";

        run2.currentTime = 0;

        run2.play();

    }, 2200);

}


function createConfetti() {

    const container =
        document.getElementById("confettiContainer");

    const colors = [

        "#ff4d6d",
        "#ffd60a",
        "#4cc9f0",
        "#ffffff"

    ];

    for (let i = 0; i < 50; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(
                Math.random() * colors.length
            )];

        container.appendChild(piece);

    }

}
