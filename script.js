// script.js
document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const mainContainer = document.getElementById("mainContainer");
    const contentContainer = document.getElementById("contentContainer");

    yesBtn.addEventListener("click", function () {
        // Esconde o container principal (botões e texto)
        mainContainer.style.display = 'none';

        // Limpa o conteúdo anterior
        contentContainer.innerHTML = '';

        // Cria a imagem e a posiciona à esquerda
        const img = document.createElement('img');
        img.src = 'imagens/pra kaka.png'; // Substitua pelo caminho da sua imagem
        img.alt = 'Imagem de desculpas';
        img.style.width = '300px'; // Ajuste o tamanho da imagem conforme necessário
        img.style.marginRight = '20px'; // Espaçamento entre a imagem e o vídeo

        // Cria o iframe com o vídeo e define o tempo de início (por exemplo, 30 segundos)
        const iframe = document.createElement('iframe');
        iframe.width = '1080';
        iframe.height = '720';
        iframe.src = 'https://www.youtube.com/embed/d9BF1JvzE7I?autoplay=1'; // Começa aos 20 segundos
        iframe.frameborder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowfullscreen = true;

        // Adiciona a imagem e o vídeo ao container
        contentContainer.appendChild(img);
        contentContainer.appendChild(iframe);
    });

    noBtn.addEventListener("click", function () {
        // Esconde o container principal (botões e texto)
        mainContainer.style.display = 'none';

        // Limpa o conteúdo anterior
        contentContainer.innerHTML = '';

        // Cria o iframe com o vídeo e define o tempo de início (por exemplo, 45 segundos)
        const iframe = document.createElement('iframe');
        iframe.width = '1080';
        iframe.height = '720';
        iframe.src = 'https://www.youtube.com/embed/Wg58WNfdn10?autoplay=1&start=45'; // Começa aos 45 segundos
        iframe.frameborder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowfullscreen = true;

        // Adiciona o vídeo ao container
        contentContainer.appendChild(iframe);
    });
});
