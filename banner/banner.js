function renderBanner(parent) {
    let bannerContainer = document.createElement("div");
    bannerContainer.id = "bannerContainer"
    parent.appendChild(bannerContainer);

    bannerContainer.innerHTML = `
        <h1 id="bannerH1">Adam Sass</h1>
        <h2 id="bannerH2">Trumpeter / Pianist / Composer</h2> 
    `
}