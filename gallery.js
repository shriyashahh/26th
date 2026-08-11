// =====================================================
// GALLERY — MEMORIES
// =====================================================

const memories = [
    // -------------------------------------------------
    // PHOTOS
    // -------------------------------------------------

    {
        type: "photo",
        file: "assets/gallery/group first photo.jpeg",
        title: "Where It All Started",
        caption: "Back when we only knew each other's names."
    },

    {
        type: "photo",
        file: "assets/gallery/minion chat ss.jpeg",
        title: "The Minion",
        caption: "A stupid little drawing that somehow became a core memory."
    },

    {
        type: "photo",
        file: "assets/gallery/proud of you 1.jpeg",
        title: "Something You Built",
        caption: "A little reminder of how proud I am of you."
    },

    {
        type: "photo",
        file: "assets/gallery/proud of you 2.jpeg",
        title: "And Then There Was This",
        caption: "One of those moments where I just had to say it."
    },

    {
        type: "photo",
        file: "assets/gallery/sid butterfly.jpeg",
        title: "Butterfly Era",
        caption: "Apparently standing in front of butterfly wings counts."
    },

    {
        type: "photo",
        file: "assets/gallery/sid gola funny.jpeg",
        title: "The Gola Incident",
        caption: "Proof that gola can completely change a person's appearance."
    },

    {
        type: "photo",
        file: "assets/gallery/at home funny.jpeg",
        title: "Home Shenanigans",
        caption: "No explanation required."
    },

    {
        type: "photo",
        file: "assets/gallery/at home group.jpeg",
        title: "Home, But Make It Chaos",
        caption: "Another one for the archive."
    },

    {
        type: "photo",
        file: "assets/gallery/sid trek.jpeg",
        title: "Adventure Mode",
        caption: "Somewhere between exploring and getting ourselves into trouble."
    },

    {
        type: "photo",
        file: "assets/gallery/butter beer restaurant.jpeg",
        title: "Butter Beer",
        caption: "A very serious food review."
    },

    {
        type: "photo",
        file: "assets/gallery/misal restaurant.jpeg",
        title: "Food Archives",
        caption: "Because apparently eating together became one of our recurring activities."
    },

    {
        type: "photo",
        file: "assets/gallery/sizzler restaurant.jpeg",
        title: "Sizzler Chronicles",
        caption: "Another restaurant memory added to the collection."
    },

    {
        type: "photo",
        file: "assets/gallery/south indian thali restaurant.jpeg",
        title: "Banana Leaf Therapy",
        caption: "Some meals just hit differently."
    },

    {
        type: "photo",
        file: "assets/gallery/trio frankie.jpeg",
        title: "Frankie Chronicles",
        caption: "Three people. One more food memory."
    },

    {
        type: "photo",
        file: "assets/gallery/trio restaurant.jpeg",
        title: "The Trio",
        caption: "The original chaos, with the trio edition."
    },

    {
        type: "photo",
        file: "assets/gallery/trio traditional.jpeg",
        title: "Traditional Mode",
        caption: "A slightly more civilized version of us."
    },

    {
        type: "photo",
        file: "assets/gallery/us outing.jpeg",
        title: "Us",
        caption: "Just us."
    },

    {
        type: "photo",
        file: "assets/gallery/us restaurant.jpeg",
        title: "Us + Food",
        caption: "A combination that apparently keeps working."
    },

    {
        type: "photo",
        file: "assets/gallery/us traditional.jpeg",
        title: "Us, Again",
        caption: "Another little piece of the archive."
    },

    // -------------------------------------------------
    // VIDEOS
    // -------------------------------------------------

    {
        type: "video",
        file: "assets/gallery/food restaurant video.mp4",
        title: "Chef Sid",
        caption: "Because apparently pav bhaji needed professional garnishing."
    },

    {
        type: "video",
        file: "assets/gallery/group food trip.mp4",
        title: "Tadgola Emergency",
        caption: "Craving tadgola so badly that stopping in the middle of the road became completely reasonable."
    },

    {
        type: "video",
        file: "assets/gallery/sid bike stunt.mp4",
        title: "Please Never Do This Again",
        caption: "This is your official reminder that bikes are supposed to have hands on the handles."
    },

    {
        type: "video",
        file: "assets/gallery/sid cooking.mp4",
        title: "Chai Department",
        caption: "Sid making chai. A rare moment of productivity."
    },

    {
        type: "video",
        file: "assets/gallery/sid gola surprised.mp4",
        title: "Plot Twist",
        caption: "The beer ice lolly was apparently MUCH better than expected."
    },

    {
        type: "video",
        file: "assets/gallery/sid irani cafe.mp4",
        title: "Don't Blink",
        caption: "The legendary eye-contact challenge."
    },

    {
        type: "video",
        file: "assets/gallery/trio south indian thali restaurant.mp4",
        title: "Thali Loading...",
        caption: "And then the banana leaf arrived."
    }
];


// =====================================================
// DOM ELEMENTS
// =====================================================

const galleryGrid =
    document.getElementById("galleryGrid");

const memoryViewer =
    document.getElementById("memoryViewer");

const memoryImage =
    document.getElementById("memoryImage");

const memoryVideo =
    document.getElementById("memoryVideo");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryCaption =
    document.getElementById("memoryCaption");

const closeMemory =
    document.getElementById("closeMemory");

const previousMemory =
    document.getElementById("previousMemory");

const nextMemory =
    document.getElementById("nextMemory");


// =====================================================
// CURRENT MEMORY
// =====================================================

let currentMemory = 0;


// =====================================================
// CREATE GALLERY
// =====================================================

function createGallery() {

    galleryGrid.innerHTML = "";

    memories.forEach((memory, index) => {

        const card =
            document.createElement("div");

        card.className = "memory-card";

        card.dataset.index = index;

        card.innerHTML = `

            <div class="memory-preview">

                ${
                    memory.type === "photo"

                    ?

                    `<img
                        src="${memory.file}"
                        alt="${memory.title}">
                    `

                    :

                    `<div class="video-preview">

                        <video
                            src="${memory.file}"
                            muted
                            preload="metadata">
                        </video>

                        <span class="play-icon">▶</span>

                    </div>`
                }

            </div>

            <div class="memory-card-title">

                ${memory.title}

            </div>

        `;

        card.addEventListener("click", () => {

            openMemory(index);

        });

        galleryGrid.appendChild(card);

    });

}


// =====================================================
// OPEN MEMORY
// =====================================================

function openMemory(index) {

    currentMemory = index;

    const memory =
        memories[currentMemory];

    memoryViewer.classList.add("show");

    memoryTitle.textContent =
        memory.title;

    memoryCaption.textContent =
        memory.caption;


    // ---------------- PHOTO ----------------

    if (memory.type === "photo") {

        memoryImage.src =
            memory.file;

        memoryImage.style.display =
            "block";

        memoryVideo.style.display =
            "none";

        memoryVideo.pause();

        memoryVideo.removeAttribute("src");

    }


    // ---------------- VIDEO ----------------

    else {

        memoryImage.style.display =
            "none";

        memoryVideo.style.display =
            "block";

        memoryVideo.src =
            memory.file;

        memoryVideo.currentTime = 0;

        memoryVideo.play()
            .catch(() => {

                // Browser may require user interaction

            });

    }

}


// =====================================================
// CLOSE MEMORY
// =====================================================

function closeMemoryViewer() {

    memoryViewer.classList.remove("show");

    memoryVideo.pause();

    memoryVideo.removeAttribute("src");

}


closeMemory.addEventListener(
    "click",
    closeMemoryViewer
);


// =====================================================
// PREVIOUS
// =====================================================

previousMemory.addEventListener(
    "click",
    () => {

        currentMemory--;

        if (currentMemory < 0) {

            currentMemory =
                memories.length - 1;

        }

        openMemory(currentMemory);

    }
);


// =====================================================
// NEXT
// =====================================================

nextMemory.addEventListener(
    "click",
    () => {

        currentMemory++;

        if (
            currentMemory >=
            memories.length
        ) {

            currentMemory = 0;

        }

        openMemory(currentMemory);

    }
);


// =====================================================
// KEYBOARD CONTROLS
// =====================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !memoryViewer.classList.contains("show")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeMemoryViewer();

        }


        if (event.key === "ArrowLeft") {

            previousMemory.click();

        }


        if (event.key === "ArrowRight") {

            nextMemory.click();

        }

    }
);


// =====================================================
// START
// =====================================================

createGallery();
