function alterarStatus(numero) {
    let botoes = document.querySelectorAll(".dashboard__item__button");
    let imagens = document.querySelectorAll(".dashboard__item__img");

    console.log(botoes[numero-1]);
    if (botoes[numero-1].textContent == "Alugar") {
        botoes[numero-1].textContent = "Devolver";
        botoes[numero-1].classList.add('dashboard__item__button--return');
        imagens[numero-1].classList.add('dashboard__item__img--rented');
    } else {
        botoes[numero-1].textContent = "Alugar";
        botoes[numero-1].classList.remove('dashboard__item__button--return');
        imagens[numero-1].classList.remove('dashboard__item__img--rented');
    }
}