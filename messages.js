document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // ELEMENTS
    // =====================================================

    const chat = document.querySelector(".chat");

    const morningTime =
        document.getElementById("morningTime");

    const finalMessage =
        document.querySelector(".final");

    const typingSound =
        document.getElementById("typingSound");

    const messageSound =
        document.getElementById("messageSound");


    // =====================================================
    // HIDE THINGS THAT SHOULD APPEAR LATER
    // =====================================================

    // Hide the 7:05 AM timestamp initially
    if (morningTime) {
        morningTime.style.display = "none";
    }

    // Hide the final archive message initially
    if (finalMessage) {
        finalMessage.style.display = "none";
    }


    // =====================================================
    // CAPTURE ONLY ACTUAL MESSAGES + REELS
    // 
    // IMPORTANT:
    // DO NOT include .center here.
    // Otherwise the timestamps shift the indexes.
    // =====================================================

    const messages = Array.from(
        chat.querySelectorAll(".message, .reel")
    );


    // =====================================================
    // HIDE ALL CHAT CONTENT INITIALLY
    // =====================================================

    messages.forEach(message => {
        message.style.display = "none";
    });


    // =====================================================
    // SCROLL TO BOTTOM
    // =====================================================

    function scrollToBottom() {

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    }


    // =====================================================
    // WAIT
    // =====================================================

    function wait(milliseconds) {

        return new Promise(resolve => {

            setTimeout(resolve, milliseconds);

        });

    }


    // =====================================================
    // PLAY TYPING SOUND
    // =====================================================

    function startTypingSound() {

        if (!typingSound) return;

        typingSound.currentTime = 0;

        typingSound.play().catch(() => {});

    }


    // =====================================================
    // STOP TYPING SOUND
    // =====================================================

    function stopTypingSound() {

        if (!typingSound) return;

        typingSound.pause();

        typingSound.currentTime = 0;

    }


    // =====================================================
    // PLAY MESSAGE SOUND
    // =====================================================

    function playMessageSound() {

        if (!messageSound) return;

        messageSound.currentTime = 0;

        messageSound.play().catch(() => {});

    }


    // =====================================================
    // TYPING INDICATOR
    // =====================================================

    function showTyping(side) {

        return new Promise(resolve => {

            const typing =
                document.createElement("div");

            typing.className =
                `typing-indicator ${side}`;

            typing.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            chat.appendChild(typing);

            scrollToBottom();

            startTypingSound();


            setTimeout(() => {

                stopTypingSound();

                typing.remove();

                resolve();

            }, 1200);

        });

    }


    // =====================================================
    // SHOW MESSAGE
    // =====================================================

    function showMessage(message, side) {

        return new Promise(resolve => {

            if (!message) {

                resolve();

                return;

            }


            message.style.display = "";

            message.classList.add("messageReveal");

            playMessageSound();

            scrollToBottom();


            setTimeout(() => {

                resolve();

            }, 350);

        });

    }


    // =====================================================
    // SHOW REEL
    // =====================================================

    function showReel(reel) {

        return new Promise(resolve => {

            if (!reel) {

                resolve();

                return;

            }


            reel.style.display = "";

            reel.classList.add("messageReveal");

            playMessageSound();

            scrollToBottom();


            setTimeout(() => {

                resolve();

            }, 500);

        });

    }


    // =====================================================
    // MAIN CHAT SEQUENCE
    // =====================================================

    async function playChat() {


        // -------------------------------------------------
        // Brr
        // -------------------------------------------------

        await wait(800);

        await showTyping("left");

        await showMessage(
            messages[0],
            "left"
        );


        // -------------------------------------------------
        // Chalo sote hai ab
        // -------------------------------------------------

        await wait(500);

        await showTyping("right");

        await showMessage(
            messages[1],
            "right"
        );


        // -------------------------------------------------
        // FOOD REEL
        // -------------------------------------------------

        await wait(700);

        await showReel(
            messages[2]
        );


        // -------------------------------------------------
        // BABY REEL
        // -------------------------------------------------

        await wait(700);

        await showReel(
            messages[3]
        );


        // -------------------------------------------------
        // MARVEL REEL
        // -------------------------------------------------

        await wait(700);

        await showReel(
            messages[4]
        );


        // =================================================
        // MORNING TRANSITION
        // =================================================

        await wait(1000);


        if (morningTime) {

            morningTime.style.display = "";

            morningTime.classList.add(
                "messageReveal"
            );

            scrollToBottom();

        }


        await wait(1200);


        // -------------------------------------------------
        // SIDDHESH BAHAR DEKHHHH
        // -------------------------------------------------

        await showTyping("right");

        await showMessage(
            messages[5],
            "right"
        );


        // -------------------------------------------------
        // SUBAH HOGAYIIII
        // -------------------------------------------------

        await wait(450);

        await showTyping("right");

        await showMessage(
            messages[6],
            "right"
        );


        // -------------------------------------------------
        // AB TOH SOTE HAI NAA
        // -------------------------------------------------

        await wait(450);

        await showTyping("right");

        await showMessage(
            messages[7],
            "right"
        );


        // -------------------------------------------------
        // GOOD NIGHT
        // -------------------------------------------------

        await wait(600);

        await showTyping("left");

        await showMessage(
            messages[8],
            "left"
        );


        // -------------------------------------------------
        // BIEBIE
        // -------------------------------------------------

        await wait(500);

        await showTyping("left");

        await showMessage(
            messages[9],
            "left"
        );


        // -------------------------------------------------
        // AUTOCORRECT
        // -------------------------------------------------

        await wait(500);

        await showTyping("right");

        await showMessage(
            messages[10],
            "right"
        );


        // =================================================
        // FINAL ARCHIVE MESSAGE
        // =================================================

        await wait(1400);


        if (finalMessage) {

            finalMessage.style.display = "";

            finalMessage.classList.add(
                "messageReveal"
            );

            scrollToBottom();

        }

    }


    // =====================================================
    // START
    // =====================================================

    playChat();


});


// =========================================================
// BACK BUTTON
// =========================================================

function goBack() {

    window.location.href = "home.html";

}
