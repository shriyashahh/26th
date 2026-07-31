const fanfare = document.getElementById("fanfare");
const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");
const run2 = document.getElementById("run2");
const giggle = document.getElementById("giggle");

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

        speech.style.opacity = "0";

        setTimeout(() => {

            battleText.style.opacity = "0";

        }, 1700);

        king.style.opacity = "0";

        setTimeout(() => {

            king.style.display = "none";

            kingConfetti.style.display = "block";

            kingConfetti.style.opacity = "1";

            kingConfetti.classList.add("kingTop");

            arena.classList.add("party");

            startConfetti();

            setTimeout(() => {

                startGoblins();

            }, 400);

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

    }, 700);

    setTimeout(() => {

        giggle.volume = 0.45;
        giggle.play();

    }, 1500);


    balloons.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");
            goblin.classList.add("running");

        }, index * 450);

    });


    confettiGoblins.forEach((goblin, index) => {

        setTimeout(() => {

            goblin.classList.add("show");
            goblin.classList.add("running");

        }, 500 + index * 350);

    });


    setTimeout(() => {

        cakeGoblin.classList.add("show");
        cakeGoblin.classList.add("running");

    }, 900);


    setTimeout(() => {

        run1.pause();
        run2.pause();

        run1.currentTime = 0;
        run2.currentTime = 0;

        document.querySelectorAll(
            ".balloon, .confettiGoblin, #cakeGoblin"
        ).forEach(goblin => {

            goblin.classList.remove("running");

        });

    }, 420
