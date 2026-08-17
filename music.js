function goBack() {
    window.location.href = "home.html";
}

function playSong(number) {

    const player = document.getElementById("player");

    const file =
        `assets/music/song${number}.mp3`;

    console.log("Trying to play:", file);

    player.src = file;

    player.load();

    const playPromise = player.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                console.log(
                    `Song ${number} started successfully`
                );

            })
            .catch(error => {

                console.error(
                    `Song ${number} failed to play:`,
                    error
                );

            });

    }

    player.onerror = () => {

        console.error(
            `ERROR loading Song ${number}:`,
            player.error
        );

    };
}
