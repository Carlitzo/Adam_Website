function renderHeader(parent) {
    let headerWrapper = document.createElement("div");
    headerWrapper.id = "headerContainer"
    parent.appendChild(headerWrapper);

    headerWrapper.innerHTML = `
        <div id="headerHome">Home</div>
        <div id="headerMusic">Music</div>
        <div id=""headerVideos>Videos</div>
        <div id="headerContact">Contact</div>
        <div id="headerBands">Bands</div>
        <div id="headerPOB">PoB</div>
    `
}