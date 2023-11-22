document.addEventListener('DOMContentLoaded', function () {
    const livros = document.querySelectorAll('.livro');
    const sinopses = document.querySelectorAll('.sinopse');

    livros.forEach((livro, index) => {
        livro.addEventListener('click', () => {
            if (sinopses[index].style.display === 'block') {
                sinopses[index].style.display = 'none';
                return;
            }
            sinopses.forEach(sinopse => {
                sinopse.style.display = 'none';
            });
            sinopses[index].style.display = 'block';
        });

        // Adicionado suporte a eventos de toque
        livro.addEventListener('touchstart', () => {
            if (sinopses[index].style.display === 'block') {
                sinopses[index].style.display = 'none';
                return;
            }
            sinopses.forEach(sinopse => {
                sinopse.style.display = 'none';
            });
            sinopses[index].style.display = 'block';
        });
    });

    const livrosContainer = document.querySelector('.livros');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');
    const larguraLivro = 350;
    const margemLivro = 20;
    const totalLivros = document.querySelectorAll('.livro').length;
    let posicaoInicial = 0;
    const larguraTotalLivros = (larguraLivro + margemLivro) * totalLivros;

    livrosContainer.style.width = larguraTotalLivros + 'px';

    setaDireita.addEventListener('click', () => {
        posicaoInicial -= larguraLivro + margemLivro;
        if (posicaoInicial < -larguraTotalLivros + larguraLivro) {
            posicaoInicial = 0;
        }
        livrosContainer.style.transform = `translateX(${posicaoInicial}px)`;
    });

    setaEsquerda.addEventListener('click', () => {
        posicaoInicial += larguraLivro + margemLivro;
        if (posicaoInicial > 0) {
            posicaoInicial = -larguraTotalLivros + larguraLivro;
        }
        livrosContainer.style.transform = `translateX(${posicaoInicial}px)`;
    });
});
