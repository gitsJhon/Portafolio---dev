document.addEventListener("DOMContentLoaded", function() {
    const texts = [ "Desarrollador"];
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100; // velocidad de escritura en milisegundos
    const pause = 1000; // tiempo de pausa entre textos en milisegundos
    const typedTextElement = document.getElementById("typed-text");

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            typedTextElement.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            if (textIndex < texts.length - 1) {
                setTimeout(eraseText, pause);
            }
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typedTextElement.innerHTML = "&#128205" + texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, speed);
        } else {
            textIndex++;
            setTimeout(typeWriter, speed);
        }
    }

    typedTextElement.innerHTML = "&#128205";
    typeWriter();
});
