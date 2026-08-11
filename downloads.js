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
    // OPEN MY DOCS
    // =====================================================

    openFile.addEventListener("click", async () => {

        showScreen(videoScreen);

        funnyVideo.currentTime = 0;

        // IMPORTANT:
        // Video should play WITH SOUND
        funnyVideo.muted = false;
        funnyVideo.volume = 1;

        try {

            await funnyVideo.play();

        } catch (error) {

            console.log(
                "Video playback was blocked:",
                error
            );

            // Show controls if browser refuses playback
            funnyVideo.controls = true;
        }

    });


    // =====================================================
    // WHEN MINION VIDEO FINISHES
    // =====================================================

    funnyVideo.addEventListener("ended", () => {

        showScreen(birthdayScreen);

        setTimeout(() => {

            birthdayAudio.currentTime = 0;

            birthdayAudio.play()
                .then(() => {

                    audioText.textContent =
                        "Playing something for you...";

                    audioDot.classList.add("playing");

                })
                .catch(() => {

                    audioText.textContent =
                        "Tap REPLAY to play the birthday song.";

                });

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
