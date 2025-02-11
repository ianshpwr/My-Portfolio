document.addEventListener("DOMContentLoaded", () => {
    const text = "Ansh • Xush •";
    const container = document.getElementById("circleText");
    const radius = 40;  // Adjust radius size

    for (let i = 0; i < text.length; i++) {
        let letter = document.createElement("span");
        letter.innerText = text[i];
        letter.classList.add("circle-text");

        let angle = (i / text.length) * (2 * Math.PI); // Convert index to radians
        let x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;

        letter.style.transform = `translate(${x + 50}px, ${y + 50}px)`; // Center in container
        container.appendChild(letter);
    }
});
