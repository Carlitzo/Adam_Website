function renderMusicPage(parent) {
    wrapper.innerHTML = "";
    renderHeader(wrapper);
    renderMusicGrid(wrapper)
    renderFooter(wrapper);
    renderBackgroundVideo(wrapper);
}

function renderMusicGrid(parent) {
    let div = document.createElement("div");
    parent.appendChild(div);
    div.className = "musicGrid";
    
    
}