console.log("Witam wszystkich kursantów YouCode.pl! Ten tekst jest już w repozytorim Git ");

let changeColorButton = document.querySelector(".changeColorButton");
let container = document.querySelector(".container");
let themeName = document.querySelector(".themeName");

changeColorButton.addEventListener("click", () => {
    container.classList.toggle("wheatBackground");

    themeName.innerText = container.classList.contains("wheatBackground")
        ? "ciemne"
        : "jasne";
});

