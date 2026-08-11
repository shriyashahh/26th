document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // ELEMENTS
    // =========================================================

    const galleryHome = document.getElementById("galleryHome");
    const memoryReel = document.getElementById("memoryReel");
    const memoryArchive = document.getElementById("memoryArchive");

    const reelButton = document.getElementById("reelButton");
    const archiveButton = document.getElementById("archiveButton");

    const backHome = document.getElementById("backHome");
    const skipReel = document.getElementById("skipReel");
    const nextMemory = document.getElementById("nextMemory");

    const reelContent = document.getElementById("reelContent");
    const reelCaption = document.getElementById("reelCaption");
    const reelCounter = document.getElementById("reelCounter");

    const memoryGrid = document.getElementById("memoryGrid");

    const viewer = document.getElementById("memoryViewer");
    const viewerContent = document.getElementById("viewerContent");
    const viewerCaption = document.getElementById("viewerCaption");
    const closeViewer = document.getElementById("closeViewer");

    const previousMemory =
        document.getElementById("previousMemory");

    const nextViewerMemory =
        document.getElementById("nextViewerMemory");

    const filterButtons =
        document.querySelectorAll(".filterButton");



    // =========================================================
    // MEMORY DATA
    // 22 PHOTOS + 7 VIDEOS = 29 MEMORIES
    // =========================================================

    const memories = [

        // ---------------- PHOTOS ----------------

        {
            type: "image",
            src: "assets/gallery/group first photo.jpeg",
            caption:
                "The first group photo — when we barely knew each other's names."
        },

        {
            type: "image",
            src: "assets/gallery/group picture.jpeg",
            caption:
                "Somehow this became the beginning of a lot of memories."
        },

        {
            type: "image",
            src: "assets/gallery/group picture 2.jpeg",
            caption:
                "One of those group memories that just stayed."
        },

        {
            type: "image",
            src: "assets/gallery/group picture 3.jpeg",
            caption:
                "Four people. One photo. Many memories later."
        },

        {
            type: "image",
            src: "assets/gallery/at home group.jpeg",
            caption:
                "At home — where apparently the chaos continues."
        },

        {
            type: "image",
            src: "assets/gallery/at home funny.jpeg",
            caption:
                "Evidence that we are, in fact, very normal people."
        },

        {
            type: "image",
            src: "assets/gallery/minion chat ss.jpeg",
            caption:
                "A random little Minion drawing that somehow became a core memory."
        },

        {
            type: "image",
            src: "assets/gallery/proud of you 1.jpeg",
            caption:
                "Proud of you."
        },

        {
            type: "image",
            src: "assets/gallery/proud of you 2.jpeg",
            caption:
                "And yes, still proud of you."
        },

        {
            type: "image",
            src: "assets/gallery/butter beer restaurant.jpeg",
            caption:
                "A very important discovery."
        },

        {
            type: "image",
            src: "assets/gallery/sid butterfly.jpeg",
            caption:
                "He saw butterfly wings and obviously became a butterfly."
        },

        {
            type: "image",
            src: "assets/gallery/sid gola funny.jpeg",
            caption:
                "The gola happened. The teeth happened. The photo had to happen."
        },

        {
            type: "image",
            src: "assets/gallery/sid trek.jpeg",
            caption:
                "One more adventure added to the archive."
        },

        {
            type: "image",
            src: "assets/gallery/sizzler restaurant.jpeg",
            caption:
                "Food memories deserve their own category."
        },

        {
            type: "image",
            src: "assets/gallery/south indian thali restaurant.jpeg",
            caption:
                "Because apparently one meal is never enough."
        },

        {
            type: "image",
            src: "assets/gallery/trio frankie.jpeg",
            caption:
                "Three people. One more food mission."
        },

        {
            type: "image",
            src: "assets/gallery/trio restaurant.jpeg",
            caption:
                "The trio."
        },

        {
            type: "image",
            src: "assets/gallery/trio traditional.jpeg",
            caption:
                "Another trio memory."
        },

        {
            type: "image",
            src: "assets/gallery/us outing.jpeg",
            caption:
                "Just us."
        },

        {
            type: "image",
            src: "assets/gallery/us restaurant.jpeg",
            caption:
                "Another one for the archive."
        },

        {
            type: "image",
            src: "assets/gallery/us traditional.jpeg",
            caption:
                "Us, somewhere between food and memories."
        },

        {
            type: "image",
            src: "assets/gallery/misal restaurant.jpeg",
            caption:
                "A very serious food-related memory."
        },


        // ---------------- VIDEOS ----------------

        {
            type: "video",
            src: "assets/gallery/food restaurant video.mp4",
            caption:
                "Professional pav bhaji garnishings. Apparently."
        },

        {
            type: "video",
            src: "assets/gallery/group food trip.mp4",
            caption:
                "Peeling tadgola in the middle of the road because the craving was stronger than common sense."
        },

        {
            type: "video",
            src: "assets/gallery/sid bike stunt.mp4",
            caption:
                "Sid, please keep both hands on the handle. This is the official archive warning."
        },

        {
            type: "video",
            src: "assets/gallery/sid cooking.mp4",
            caption:
                "Sid making chai. A surprisingly serious operation."
        },

        {
            type: "video",
            src: "assets/gallery/sid gola surprised.mp4",
            caption:
                "The beer ice lolly was apparently much better than expected."
        },

        {
            type: "video",
            src: "assets/gallery/sid irani cafe.mp4",
            caption:
                "The eye-contact challenge. Blink first and you lose."
        },

        {
            type: "video",
            src: "assets/gallery/trio south indian thali restaurant.mp4",
            caption:
                "The South Indian thali has officially entered the archive."
        }

    ];



    // =========================================================
    // SCREEN SWITCHING
    // =========================================================

    function showScreen(screen) {

        document
            .querySelectorAll(".screen")
            .forEach(item => {

                item.classList.remove("active");

            });

        screen.classList.add("active");

        window.scrollTo(0, 0);

    }



    // =========================================================
    // HOME BUTTONS
    // =========================================================

    reelButton.addEventListener("click", () => {

        showScreen(memoryReel);

        reelIndex = 0;

        showReelMemory();

    });


    archiveButton.addEventListener("click", () => {

        showScreen(memoryArchive);

        renderArchive("all");

    });


    backHome.addEventListener("click", () => {

        showScreen(galleryHome);

    });



    // =========================================================
    // MEMORY REEL
    // =========================================================

    let reelIndex = 0;


    function showReelMemory() {

        const memory = memories[reelIndex];

        reelContent.innerHTML = "";

        reelCaption.textContent =
            memory.caption;


        reelCounter.textContent =
            String(reelIndex + 1).padStart(2, "0")
            + " / "
            + memories.length;


        if (memory.type === "image") {

            const image =
                document.createElement("img");

            image.src = memory.src;

            image.alt = "Memory";

            reelContent.appendChild(image);

        }


        if (memory.type === "video") {

            const video =
                document.createElement("video");

            video.src = memory.src;

            video.autoplay = true;

            video.controls = true;

            video.playsInline = true;

            reelContent.appendChild(video);

        }

    }


    nextMemory.addEventListener("click", () => {

        reelIndex++;

        if (reelIndex >= memories.length) {

            reelIndex = 0;

        }

        showReelMemory();

    });


    skipReel.addEventListener("click", () => {

        showScreen(memoryArchive);

        renderArchive("all");

    });



    // =========================================================
    // ARCHIVE GRID
    // =========================================================

    function renderArchive(filter = "all") {

        memoryGrid.innerHTML = "";

        memories.forEach((memory, index) => {

            if (
                filter !== "all" &&
                memory.type !== filter
            ) {

                return;

            }


            const card =
                document.createElement("div");

            card.className = "memory-card";

            card.dataset.type =
                memory.type;

            card.dataset.src =
                memory.src;

            card.dataset.caption =
                memory.caption;

            card.dataset.index =
                index;


            // IMAGE CARD

            if (memory.type === "image") {

                const image =
                    document.createElement("img");

                image.src =
                    memory.src;

                image.alt =
                    "Memory";

                card.appendChild(image);

            }


            // VIDEO CARD

            if (memory.type === "video") {

                const video =
                    document.createElement("video");

                video.src =
                    memory.src;

                video.muted = true;

                video.playsInline = true;

                video.preload = "metadata";

                card.appendChild(video);

            }


            memoryGrid.appendChild(card);

        });

    }



    // =========================================================
    // FILTERS
    // =========================================================

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            renderArchive(filter);

        });

    });



    // =========================================================
    // OPEN VIEWER
    // =========================================================

    memoryGrid.addEventListener("click", event => {

        const card =
            event.target.closest(".memory-card");

        if (!card) return;


        const index =
            Number(card.dataset.index);

        openViewer(index);

    });



    let currentViewerIndex = 0;


    function openViewer(index) {

        currentViewerIndex = index;

        const memory =
            memories[currentViewerIndex];


        viewerContent.innerHTML = "";

        viewerCaption.textContent =
            memory.caption;


        if (memory.type === "image") {

            const image =
                document.createElement("img");

            image.src =
                memory.src;

            image.alt =
                "Memory";

            viewerContent.appendChild(image);

        }


        if (memory.type === "video") {

            const video =
                document.createElement("video");

            video.src =
                memory.src;

            video.controls = true;

            video.autoplay = true;

            video.playsInline = true;

            viewerContent.appendChild(video);

        }


        viewer.classList.add("active");

    }



    // =========================================================
    // VIEWER NAVIGATION
    // =========================================================

    previousMemory.addEventListener("click", () => {

        currentViewerIndex--;

        if (currentViewerIndex < 0) {

            currentViewerIndex =
                memories.length - 1;

        }

        openViewer(currentViewerIndex);

    });


    nextViewerMemory.addEventListener("click", () => {

        currentViewerIndex++;

        if (
            currentViewerIndex >= memories.length
        ) {

            currentViewerIndex = 0;

        }

        openViewer(currentViewerIndex);

    });



    // =========================================================
    // CLOSE VIEWER
    // =========================================================

    function closeMemoryViewer() {

        viewer.classList.remove("active");

        const video =
            viewerContent.querySelector("video");

        if (video) {

            video.pause();

            video.currentTime = 0;

        }

        viewerContent.innerHTML = "";

        viewerCaption.textContent = "";

    }


    closeViewer.addEventListener(
        "click",
        closeMemoryViewer
    );



    // CLICK OUTSIDE

    viewer.addEventListener("click", event => {

        if (event.target === viewer) {

            closeMemoryViewer();

        }

    });



    // ESCAPE

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeMemoryViewer();

        }

    });



    // =========================================================
    // INITIAL STATE
    // =========================================================

    showScreen(galleryHome);

});
