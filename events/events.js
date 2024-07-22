function renderEvents() {
    const home = document.getElementById("headerHome");
    const music = document.getElementById("headerMusic");
    const bands = document.getElementById("headerBands");
    const pio = document.getElementById("headerPIO");
    const contact = document.getElementById("headerContact");

    home.addEventListener("click", () => {
        location.reload();
    });
    
    music.addEventListener("click", () => {
        renderMusicPage(wrapper);
    });

    bands.addEventListener("click", () => {
        renderBandPage(wrapper);
    });

    pio.addEventListener("click", () => {
        renderPIOPage(wrapper);
    });

    contact.addEventListener("click", () => {
        renderContactPage(wrapper);
    });
}

renderEvents();