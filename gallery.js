document.addEventListener("DOMContentLoaded", () => {

    const memoryGrid = document.getElementById("memoryGrid");
    const viewer = document.getElementById("memoryViewer");
    const viewerContent = document.getElementById("viewerContent");
    const viewerCaption = document.getElementById("viewerCaption");
    const closeViewer = document.getElementById("closeViewer");



    // --------------------------------
    // OPEN MEMORY
    // --------------------------------

    const memories = document.querySelectorAll(".memory-card");

    memories.forEach(card => {

        card.addEventListener("click", () => {

            const type = card.dataset.type;
            const src = card.dataset.src;
            const caption = card.dataset.caption || "";

            viewerContent.innerHTML = "";

            // PHOTO
            if (type === "image") {

                const image = document.createElement("img");

                image.src = src;
                image.alt = "Memory";

                viewerContent.appendChild(image);
            }


            // VIDEO
            if (type === "video") {

                const video = document.createElement("video");

                video.src = src;
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;

                viewerContent.appendChild(video);
            }


            viewerCaption.textContent = caption;

            viewer.classList.add("active");

        });

    });



    // --------------------------------
    // CLOSE VIEWER
    // --------------------------------

    closeViewer.addEventListener("click", () => {

        viewer.classList.remove("active");

        // Stop any video that may be playing
        const video = viewerContent.querySelector("video");

        if (video) {

            video.pause();
            video.currentTime = 0;
        }

        viewerContent.innerHTML = "";

    });



    // --------------------------------
    // CLOSE WITH BACKGROUND CLICK
    // --------------------------------

    viewer.addEventListener("click", (event) => {

        if (event.target === viewer) {

            viewer.classList.remove("active");

            const video =
                viewerContent.querySelector("video");

            if (video) {

                video.pause();
                video.currentTime = 0;
            }

            viewerContent.innerHTML = "";

        }

    });



    // --------------------------------
    // ESCAPE KEY
    // --------------------------------

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            viewer.classList.remove("active");

            const video =
                viewerContent.querySelector("video");

            if (video) {

                video.pause();
                video.currentTime = 0;
            }

            viewerContent.innerHTML = "";

        }

    });

});
