// Toggle between adding the responsive class
function topnav() {
    const x = document.getElementById('topnav');
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
