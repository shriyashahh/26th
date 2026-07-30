function goBack() {

    window.location.href = "home.html";

}

function playSong(number) {

    const player = document.getElementById("player");

    player.src = `assets/music/song${number}.mp3`;

    player.load();

    player.play();

}

function showMore() {

    document.getElementById("moreSongs").style.display = "block";

    document.getElementById("moreBtn").style.display = "none";

}
