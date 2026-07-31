const overlay = document.getElementById("overlay");

const king = document.getElementById("king");

const speech = document.getElementById("speech");

const fanfare = document.getElementById("fanfare");

const kingVoice = document.getElementById("kingVoice");

setTimeout(() => {

    document.getElementById("battleText").innerHTML =
        "⏸️ BATTLE FROZEN ⏸️";

    overlay.style.background =
        "rgba(0, 0, 0, 0.75)";

    fanfare.play();

    king.style.bottom = "0px";

    king.style.opacity = "1";

    speech.style.opacity = "1";

    setTimeout(() => {

        kingVoice.play();

    }, 1200);

}, 3000);
