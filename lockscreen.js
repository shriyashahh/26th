document.body.addEventListener("click", () => {

    document.querySelector(".phone").style.transform =
        "translateY(-100%)";

    setTimeout(() => {

        window.location.href = "home.html";

    }, 800);

});
