// JavaScript Document
const eindDatum = new Date("Dec 20, 2025 23:59:59").getTime();

function updateCountdown(elementId, endTime) {
    const nu = new Date().getTime();
    const verschil = endTime - nu;

    if (verschil < 0) {
        document.getElementById(elementId).innerHTML = "Klaar!";
        return;
    }

    const dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
    const uren  = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min   = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
    const sec   = Math.floor((verschil % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML =
        `${dagen}:${uren}:${min}:${sec}s`;
}

setInterval(() => {
    updateCountdown("countdown", eindDatum);
    updateCountdown("countdown2", eindDatum);
    updateCountdown("countdown3", eindDatum);

}, 1000);

    /* bron: chatgpt prompt "maak een afteller""*/ 

function showImage(thumbnail) {
    const mainImage = document.getElementById('displayed-image');
    mainImage.src = thumbnail.src; // verander de grote afbeelding
    mainImage.alt = thumbnail.alt; // update alt voor toegankelijkheid
}

/* chatgpt hoe zorg ervooor dat de afbeeldingen die ik heb reageren op de klik en groot ernaast komen*/
