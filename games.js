const arena = document.getElementById("arena");

const battleText = document.getElementById("battleText");

const overlay = document.getElementById("overlay");

const spotlight = document.getElementById("spotlight");

const king = document.getElementById("king");

const speech = document.getElementById("speech");

const fanfare = document.getElementById("fanfare");

const kingVoice = document.getElementById("kingVoice");

// STEP 1: Freeze battle

setTimeout(() => {

    battleText.innerHTML = "⏸️ BATTLE FROZEN ⏸️";

    overlay.style.background = "rgba(0,0,0,0.75)";

    fanfare.play();

    king.style.bottom = "0px";

    king.style.opacity = "1";

    speech.style.opacity = "1";

}, 3000);

// STEP 2: Play king voice

setTimeout(() => {

    kingVoice.play();

}, 4200);

// STEP 3: Move king to top and change background

setTimeout(() => {

    battleText.style.opacity = "0";

    speech.style.opacity = "0";

    arena.classList.add("party-mode");

    spotlight.style.opacity = "1";

    king.classList.add("king-top");

}, 12000);
