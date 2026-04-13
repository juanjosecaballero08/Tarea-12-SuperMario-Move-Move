//pon aquí tu js
const mario = document.getElementById("mario");
var posicionX=300;
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            posicionX = posicionX - 10;
            mario.style.transform = "scaleX(-1)";
            mario.style.backgroundImage = "url('./img/mario.png')";
            mario.style.zIndex = "10";
            break;
        case "ArrowRight":
            posicionX = posicionX + 10;
            mario.style.transform = "scaleX(1)";
            mario.style.backgroundImage = "url('./img/mario.png')";
            mario.style.zIndex = "10";
            break;
        case "ArrowDown":
            // mostrar la imagen agachado, asegurando que quede por encima y con tamaño correcto
            mario.style.backgroundImage = "url('./img/marioAgachado.png')";
            mario.style.zIndex = "10";
            mario.style.backgroundSize = "contain";
            mario.style.backgroundPosition = "center bottom";
            mario.style.backgroundRepeat = "no-repeat";
            break;

    }
    mario.style.left=posicionX + "px";
});
