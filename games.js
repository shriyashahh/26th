const fanfare = document.getElementById("fanfare");
const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");
const run2 = document.getElementById("run2");

const giggle = document.getElementById("giggle");
const yay = document.getElementById("yay");

const splat = document.getElementById("splat");
const digging = document.getElementById("digging");
const minerGiggle = document.getElementById("minerGiggle");
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
const panicGoblin = document.getElementById("panicGoblin");

const groundCrack = document.getElementById("groundCrack");

const miner = document.getElementById("miner");
const minerBubble = document.getElementById("minerBubble");

let confettiInterval;



window.onload = () => {

    king.style.opacity = "1";

    fanfare.play();

    // ---------------- BATTLE FROZEN ----------------

    setTimeout(() => {

        battleText.innerHTML = "❄️ BATTLE FROZEN ❄️";

    }, 1000);


    // ---------------- KING SPEECH ----------------

    setTimeout(() => {

        speech.style.opacity = "1";

        kingVoice.play();

    }, 1800);


    // speech = 10–11 sec

    kingVoice.onended = () => {

        speech.style.opacity = "0";

        setTimeout(moveKing, 1200);

    };
};





function moveKing() {

    battleText.style.opacity = "0";

    king.style.opacity = "0";

    kingConfetti.style.display = "block";

    setTimeout(() => {

        kingConfetti.style.opacity = "1";

        kingConfetti.classList.add("kingTop");

    }, 100);

    arena.classList.add("party");

    startConfetti();

    // wait before goblins

    setTimeout(() => {

        startGoblins();

    }, 2200);
}





function startGoblins() {

    run1.loop = true;
    run2.loop = true;

    run1.volume = 0.4;
    run2.volume = 0.25;

    run1.play();

    setTimeout(() => {

        run2.play();

    }, 800);



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

    }, 1500);



    // celebrate for 5 sec

    setTimeout(() => {

        balloons.forEach(g => g.classList.add("bounce"));

        confettiGoblins.forEach(g => g.classList.add("bounce"));

        cakeGoblin.classList.add("bounce");

        giggle.play();

        yay.play();

    }, 5200);



    // cake drop

    setTimeout(() => {

        dropCake();

    }, 10000);
}






function dropCake() {

    clearInterval(confettiInterval);

    run1.pause();
    run2.pause();

    giggle.pause();
    yay.pause();

    balloons.forEach(g => g.classList.remove("bounce"));

    confettiGoblins.forEach(g => g.classList.remove("bounce"));

    cakeGoblin.classList.remove("bounce");



    splat.play();

    cakeGoblin.style.opacity = "0";

    fallenCake.classList.add("show");



    // 1 sec pause

    setTimeout(() => {

        panicMode();

    }, 1000);
}






function panicMode() {

    balloons.forEach(g => {

        g.src = "assets/battle/goblin_panick.png";

    });

    confettiGoblins.forEach(g => {

        g.src = "assets/battle/goblin_panick.png";

    });


    panicGoblin.style.display = "block";

    panicGoblin.style.opacity = "1";



    // earthquake

    arena.classList.add("shake");



    setTimeout(() => {

        groundCrack.classList.add("show");

        digging.play();

    }, 500);




    // miner after 3 sec

    setTimeout(() => {

        showMiner();

    }, 3000);
}







function showMiner() {

    arena.classList.remove("shake");

    digging.pause();

    digging.currentTime = 0;


    // remove cake
