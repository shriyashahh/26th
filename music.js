function goBack() {

    window.location.href = "home.html";

}

const songs = [

    "assets/music/song1.mp3",
    "assets/music/song2.mp3",
    "assets/music/song3.mp3",
    "assets/music/song4.mp3",
    "assets/music/song5.mp3",
    "assets/music/song6.mp3"

];

function playSong(index) {

    const player = document.getElementById("player");

    player.src = songs[index];

    player.play();

}
