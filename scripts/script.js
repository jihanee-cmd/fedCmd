// JavaScript Document

// =====================
// COUNTDOWN (alle pagina's waar ids bestaan)
// =====================
const eindDatum = new Date("Dec 23, 2026 23:59:59").getTime();

function updateCountdown(elementId, endTime) {
  const el = document.getElementById(elementId);
  if (!el) return; // element bestaat niet op deze pagina

  const nu = Date.now();
  const verschil = endTime - nu;

  if (verschil < 0) {
    el.textContent = "Klaar!";
    return;
  }

  const dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
  const uren  = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min   = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
  const sec   = Math.floor((verschil % (1000 * 60)) / 1000);

  el.textContent = `${dagen}:${uren}:${min}:${sec}s`;
}

setInterval(() => {
  updateCountdown("countdown", eindDatum);
  updateCountdown("countdown2", eindDatum);
  updateCountdown("countdown3", eindDatum);
}, 1000);
/*text grote */ 


const bigger = document.getElementById("fontBigger");
const smaller = document.getElementById("fontSmaller");

let fontSize = 16;

if (bigger && smaller) {
  bigger.addEventListener("click", () => {
    fontSize += 2;
    document.documentElement.style.setProperty(
      "--base-font-size",
      fontSize + "px"
    );
  });

  smaller.addEventListener("click", () => {
    fontSize -= 2;
    document.documentElement.style.setProperty(
      "--base-font-size",
      fontSize + "px"
    );
  });
}


// =====================
// GALLERY (shop pagina)
// =====================
function showImage(thumbnail) {
  const mainImage = document.getElementById("displayed-image");
  if (!mainImage || !thumbnail) return;

  mainImage.src = thumbnail.src;
  mainImage.alt = thumbnail.alt || "Grote afbeelding";
}

// (Als je onclick in HTML gebruikt, moet showImage global zijn)

window.showImage = showImage;

// =====================
// HAMBURGER (index pagina)
// =====================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

if (hamburgerBtn && hamburgerMenu) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = !hamburgerMenu.hasAttribute("hidden");

    hamburgerBtn.classList.toggle("is-active");
    hamburgerBtn.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) {
      hamburgerMenu.setAttribute("hidden", "");
    } else {
      hamburgerMenu.removeAttribute("hidden");
    }
  });
}
// =====================
// ADD TO CART LOADING (shop pagina)
// =====================

const addToCartBtn = document.getElementById("addToCart");

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    addToCartBtn.classList.add("loading");
    addToCartBtn.disabled = true;
    addToCartBtn.textContent = "adding...";

    setTimeout(() => {
      addToCartBtn.classList.remove("loading");
      addToCartBtn.disabled = false;
      addToCartBtn.textContent = "One more?";
    }, 1200);
  });
}

// chatgpt voor de settimeout en adding...// 

//*sound effect*// 
const hoverSound = document.getElementById("hoverSound");
const otsukaray = document.querySelector(".otsukaray");

if (otsukaray && hoverSound) {
  otsukaray.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0; // altijd opnieuw starten
    hoverSound.play();
  });
}