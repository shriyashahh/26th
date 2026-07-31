const battleText = document.getElementById("battleText");

const overlay = document.getElementById("overlay");

const king = document.getElementById("king");

const speech = document.getElementById("speech");

const goblin = document.getElementById("balloonGoblin");

const goblinBubble = document.getElementById("goblinBubble");

const fanfare = document.getElementById("fanfare");

const kingVoice = document.getElementById("kingVoice");

const footsteps = document.getElementById("footsteps");

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

    setTimeout(() => {

        footsteps.play();

        goblin.style.opacity = "1";

        goblin.style.animation =
            "goblinRun 6s linear forwards";

        goblinBubble.style.opacity = "1";

        setTimeout(() => {

            goblinBubble.style.opacity = "0";

        }, 2500);

    }, 5000);

}, 3000);
