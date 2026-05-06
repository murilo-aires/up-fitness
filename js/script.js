let index = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function atualizarBotoes() {
    prevBtn.style.display = index === 0 ? "none" : "block";
    nextBtn.style.display = index === slides.length - 1 ? "none" : "block";
}

function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
    atualizarBotoes();
}

function avancar() {
    if (index < slides.length - 1) {
        index++;
        mostrarSlide(index);
    }
}

function voltar() {
    if (index > 0) {
        index--;
        mostrarSlide(index);
    }
}

// iniciar correto
atualizarBotoes();