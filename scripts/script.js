// JavaScript Document
console.log("hi");

  const eindDatum = new Date("dec 13, 2025 23:59:59").getTime();

    const timer = setInterval(function () {
        const nu = new Date().getTime();
        const verschil = eindDatum - nu;

        if (verschil < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Klaar!";
            return;
        }

        const dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
        const uren  = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min   = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
        const sec   = Math.floor((verschil % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            dagen + ": " + uren + ": " + min + ":" + sec + "s ";
    }, 1000);