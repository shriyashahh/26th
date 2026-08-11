document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // BACK BUTTON
    // =====================================================

    window.goBack = function () {
        window.location.href = "home.html";
    };


    // =====================================================
    // CHAT ELEMENTS
    // =====================================================

    const chat = document.querySelector(".chat");

    const messages = Array.from(
        chat.querySelectorAll(".message, .reel")
    );

    const finalMessage = chat.querySelector(".final");


    // =====================================================
    // HIDE EVERYTHING INITIALLY
    // =====================================================

    messages.forEach(item => {
        item.style.display = "none";
    });

    finalMessage.style.display = "none";


    // =====================================================
    // TYPING INDICATOR
    // =====================================================

    function showTyping(side) {

        return new Promise(resolve => {

            const typing = document.createElement("div");

            typing.className =
                `typing-indicator ${side}`;

            typing.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            chat.appendChild(typing);

            scrollToBottom();


            setTimeout(() => {

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

            message.style.display = "";

            message.classList.add("messageReveal");

            scrollToBottom();

            setTimeout(() => {

                resolve();

            }, 700);

        });

    }


    // =====================================================
    // SHOW REEL
    // =====================================================

    function showReel(reel) {

        return new Promise(resolve => {

            reel.style.display = "";

            reel.classList.add("reelReveal");

            scrollToBottom();

            setTimeout(() => {

                resolve();

            }, 900);

        });

    }


    // =====================================================
    // SCROLL
    // =====================================================

    function scrollToBottom() {

        setTimeout(() => {

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

        }, 50);

    }


    // =====================================================
    // CHAT SEQUENCE
    // =====================================================

    async function playChat() {

        // -------------------------------------------------
        // FIRST MESSAGE
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 1000)
        );

        await showTyping("left");

        await showMessage(
            messages[0],
            "left"
        );


        // -------------------------------------------------
        // YOUR REPLY
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 500)
        );

        await showTyping("right");

        await showMessage(
            messages[1],
            "right"
        );


        // -------------------------------------------------
        // FOOD REEL
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 700)
        );

        await showReel(messages[2]);


        // -------------------------------------------------
        // BABY REEL
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 700)
        );

        await showReel(messages[3]);


        // -------------------------------------------------
        // MARVEL REEL
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 700)
        );

        await showReel(messages[4]);


        // -------------------------------------------------
        // TIME BREAK
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 1200)
        );


        // -------------------------------------------------
        // "SIDDHESH BAHAR DEKHHHH"
        // -------------------------------------------------

        await showTyping("right");

        await showMessage(
            messages[5],
            "right"
        );


        // -------------------------------------------------
        // "SUBAH HOGAYIIII"
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 450)
        );

        await showTyping("right");

        await showMessage(
            messages[6],
            "right"
        );


        // -------------------------------------------------
        // "AB TOH SOTE HAI NAA"
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 450)
        );

        await showTyping("right");

        await showMessage(
            messages[7],
            "right"
        );


        // -------------------------------------------------
        // GOOD NIGHT
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 600)
        );

        await showTyping("left");

        await showMessage(
            messages[8],
            "left"
        );


        // -------------------------------------------------
        // BIEBIE
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 500)
        );

        await showTyping("left");

        await showMessage(
            messages[9],
            "left"
        );


        // -------------------------------------------------
        // AUTOCORRECT
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 500)
        );

        await showTyping("right");

        await showMessage(
            messages[10],
            "right"
        );


        // -------------------------------------------------
        // FINAL
        // -------------------------------------------------

        await new Promise(resolve =>
            setTimeout(resolve, 1400)
        );

        finalMessage.style.display = "";

        finalMessage.classList.add("messageReveal");

        scrollToBottom();

    }


    // =====================================================
    // START
    // =====================================================

    playChat();

});
