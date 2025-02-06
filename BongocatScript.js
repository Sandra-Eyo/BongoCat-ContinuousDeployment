let clickCount = 0;
const gif = document.getElementById("animated-gif");
const staticImage = document.getElementById("static-image");
const counter = document.getElementById("click-counter");
const button = document.getElementById("click-button");

button.addEventListener("click", () => {
    clickCount++;
    counter.textContent = `Clics: ${clickCount}`;
    
    // Reemplazar la imagen estática con el GIF
    staticImage.classList.add("hidden");
    gif.style.visibility = "visible";
    
    setTimeout(() => {
        gif.style.visibility = "hidden";
        staticImage.classList.remove("hidden");
    }, 2000);
});