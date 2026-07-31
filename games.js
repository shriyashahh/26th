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


// STEP 1

setTimeout(() => {

    battleText.innerHTML = "⏸️ BATTLE FROZEN ⏸️";

    overlay.style.background = "rgba(0,0,0,0.75)";

    fanfare.play();

    king.style.bottom = "0px";

    king.style.opacity = "1";

    speech.style.opacity = "1";

}, 3000);


// STEP 2

setTimeout(() => {

    kingVoice.play();

}, 4300);


// STEP 3

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

        startParade();

    }, 1500);

};
king.src="assets/battle/king_confetti.png";
king.classList.add("king-top");


function startParade() {

    const balloons = document.querySelectorAll(".balloon");

    const confetti = document.querySelectorAll(".confettiGoblin");

    const cake = document.getElementById("cakeGoblin");

    // BALLOON GOBLINS

    setTimeout(() => {

        balloons[0].style.opacity = "1";

        balloons[0].style.transition = "4s";

        balloons[0].style.right = "5%";

        balloons[0].style.top = "70%";

        run1.play();

    }, 300);


    setTimeout(() => {

        balloons[1].style.opacity = "1";

        balloons[1].style.transition = "4s";

        balloons[1].style.right = "30%";

        balloons[1].style.top = "55%";

    }, 1200);


    setTimeout(() => {

        balloons[2].style.opacity = "1";

        balloons[2].style.transition = "4s";

        balloons[2].style.right = "55%";

        balloons[2].style.top = "82%";

    }, 2200);


    // CONFETTI GOBLINS

    setTimeout(() => {

        confetti[0].style.opacity = "1";

        confetti[0].style.transition = "4s";

        confetti[0].style.left = "12%";

        confetti[0].style.top = "42%";

        giggle.play();

    }, 900);


    setTimeout(() => {

        confetti[1].style.opacity = "1";

        confetti[1].style.transition = "4s";

        confetti[1].style.left = "70%";

        confetti[1].style.top = "58%";

    }, 1800);


    setTimeout(() => {

        confetti[2].style.opacity = "1";

        confetti[2].style.transition = "4s";

        confetti[2].style.left = "25%";

        confetti[2].style.top = "78%";

    }, 2700);


    setTimeout(() => {

        confetti[3].style.opacity = "1";

        confetti[3].style.transition = "4s";

        confetti[3].style.left = "82%";

        confetti[3].style.top = "38%";

    }, 3400);


    // CAKE GOBLIN

    setTimeout(() => {

        cake.style.opacity = "1";

        cake.style.transition = "5s";

        cake.style.left = "50%";

        cake.style.top = "66%";

        cake.style.transform = "translateX(-50%)";

        run2.play();

    }, 4200);

}


// CONFETTI

function createConfetti() {

    const container =
        document.getElementById("confettiContainer");

    const colors = [

        "#FFD700",
        "#ff4d6d",
        "#4cc9f0",
        "#ffffff",
        "#06d6a0"

    ];

    for (let i = 0; i < 70; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(
                Math.random() * colors.length
            )];

        piece.style.width =
            6 + Math.random() * 12 + "px";

        piece.style.height =
            8 + Math.random() * 16 + "px";

        piece.style.animationDuration =
            2 + Math.random() * 3 + "s";

        container.appendChild(piece);

    }

}
