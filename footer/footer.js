function renderFooter(parent) {
    let footerContainer = document.createElement("div");
    footerContainer.id = "footerContainer";

    parent.appendChild(footerContainer);
    footerContainer.innerHTML = `
        <a id="instagramIcon" href="https://www.instagram.com/adamerksass"><img src="./../media/images/icons/icons8-instagram-50.png"></a>
        <a id="facebookIcon" href="https://www.facebook.com/profile.php?id=100086247500859"><img src="./../media/images/icons/icons8-facebook-50.png"></a>
        <a id="spotifyIcon" href="https://open.spotify.com/artist/39Hqg9HOVrra5TX0mdsj4N?si=-D1KdUE1SIqXu0SrUsAexA"><img src="./../media/images/icons/icons8-spotify-50.png"></a>
    `
}