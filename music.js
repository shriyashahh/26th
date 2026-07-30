function goBack() {

    window.location.href = "home.html";

}

function playSong(number) {

    const player = document.getElementById("player");

    player.src = `assets/music/song${number}.mp3`;

    player.load();

    player.play();

}
