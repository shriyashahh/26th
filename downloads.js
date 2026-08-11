document.addEventListener("DOMContentLoaded", () => {


    // =====================================================
    // ELEMENTS
    // =====================================================

    const introScreen =
        document.getElementById("introScreen");

    const videoScreen =
        document.getElementById("videoScreen");

    const birthdayScreen =
        document.getElementById("birthdayScreen");


    const openFile =
        document.getElementById("openFile");

    const funnyVideo =
        document.getElementById("funnyVideo");

    const birthdayAudio =
        document.getElementById("birthdayAudio");

    const replayAudio =
        document.getElementById("replayAudio");

    const audioText =
        document.getElementById("audioText");

    const audioDot =
        document.getElementById("audioDot");



    // =====================================================
    // SCREEN SWITCHING
    // =====================================================

    function showScreen(screen) {

        document
            .querySelectorAll(".screen")
            .forEach(item => {

                item.classList.remove("active");

            });


        screen.classList.add("active");

    }



    // =====================================================
    // OPEN MY DOC
    // =====================================================

    openFile.addEventListener("click", () => {

        showScreen(videoScreen);


        funnyVideo.currentTime = 0;

        funnyVideo.muted=false;
        const playPromise =
            funnyVideo.play();


        if (playPromise !== undefined) {

            playPromise.catch(() => {

                // Browser prevented playback.
                // User can use the video controls.

                funnyVideo.controls = true;

            });

        }

    });



    // =====================================================
    // WHEN MINION VIDEO FINISHES
    // =====================================================

    funnyVideo.addEventListener("ended", () => {

        showScreen(birthdayScreen);


        // Small delay makes the transition
        // feel intentional rather than abrupt.

        setTimeout(() => {

            birthdayAudio.currentTime = 0;


            const playPromise =
                birthdayAudio.play();


            if (playPromise !== undefined) {

                playPromise
                    .then(() => {

                        audioText.textContent =
                            "Playing something for you...";

                        audioDot.classList.add("playing");

                    })
                    .catch(() => {

                        audioText.textContent =
                            "Tap REPLAY to play the birthday song.";

                    });

            }

        }, 900);

    });



    // =====================================================
    // AUDIO EVENTS
    // =====================================================

    birthdayAudio.addEventListener(
        "play",
        () => {

            audioText.textContent =
                "Playing something for you...";

            audioDot.classList.add("playing");

        }
    );


    birthdayAudio.addEventListener(
        "pause",
        () => {

            audioDot.classList.remove("playing");

        }
    );


    birthdayAudio.addEventListener(
        "ended",
        () => {

            audioText.textContent =
                "For the birthday boy.";

            audioDot.classList.remove("playing");

        }
    );



    // =====================================================
    // REPLAY AUDIO
    // =====================================================

    replayAudio.addEventListener("click", () => {

        birthdayAudio.currentTime = 0;

        birthdayAudio.play();

    });



    // =====================================================
    // INITIAL STATE
    // =====================================================

    showScreen(introScreen);

});
