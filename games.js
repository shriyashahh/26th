const arena = document.getElementById("arena");

const battleText = document.getElementById("battleText");

const overlay = document.getElementById("overlay");

const spotlight = document.getElementById("spotlight");

const king = document.getElementById("king");

const speech = document.getElementById("speech");

const fanfare = document.getElementById("fanfare");

const kingVoice = document.getElementById("kingVoice");

const run1 = document.getElementById("run1");

const run2 = document.getElementById("run2");

const footsteps = document.getElementById("footsteps");

const giggle = document.getElementById("giggle");

const cheer = document.getElementById("cheer");

setTimeout(() => {

    battleText.innerHTML = "⏸️ BATTLE FROZEN ⏸️";

    overlay.style.background = "rgba(0,0,0,0.75)";

    fanfare.play();

    king.style.bottom = "0px";

    king.style.opacity = "1";

    speech.style.opacity = "1";

    setTimeout(() => {

        kingVoice.play();

    }, 1200);

}, 3000);

/* AFTER KING FINISHES */

setTimeout(() => {

    battleText.style.opacity = "0";

    speech.style.opacity = "0";

    arena.classList.add("party-mode");

    spotlight.style.opacity = "1";

    king.classList.add("king-top");

    cheer.play();

    startGoblins();

}, 10000);

function startGoblins() {

    document.querySelectorAll(".balloon").forEach(

        (goblin, index) => {

            setTimeout(() => {

                goblin.style.opacity = "1";

                goblin.style.animation =
                    "rightToLeft 7s linear forwards";

            }, index * 800);

        }

    );

    document.querySelectorAll(".confetti").forEach(

        (goblin, index) => {

            setTimeout(() => {

                goblin.style.opacity = "1";

                goblin.style.animation =
                    "diagonal 6s linear forwards";

            }, index * 700);

        }

    );

    setTimeout(() => {

        run1.play();

        footsteps.play();

        giggle.play();

        const cake = document.getElementById("cakeGoblin");

        cake.style.opacity = "1";

        cake.style.animation =
            "leftToRight 8s linear forwards";

    }, 2200);

}
