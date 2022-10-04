let popup = document.getElementById("popup");
let txt = document.getElementById("texto");
let imagem = document.getElementById("imagem");
let paragrafo = document.getElementById("paragrafo");
<<<<<<< HEAD
=======
let link = document.getElementById("link");

>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c

function openPopup(x){
    popup.classList.add("open-popup");
    
    if (x == 'alimentacao'){
        
        txt.textContent = 'ALIMENTAÇÃO';
        imagem.src = './src/ico/food.png';
        paragrafo.textContent = '\nAcesse aqui seu aplicativo de delivery para fazer seu pedido de comida.\nTente dizer “Hey Carro, acessar Ifood\nAí é só seguir com sua pesquisa e realizar seu pedido!';
<<<<<<< HEAD
=======
        link.href = './alimentacao.html'
>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    }
    else if (x == 'rotina'){
        
        txt.textContent = 'ROTINA';
        imagem.src = './src/ico/calendar.png';
        paragrafo.textContent = '\nCadastre suas rotinas aqui para facilitar seu dia a dia.';
<<<<<<< HEAD
=======
        link.href = './rotina.html'
>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    }
    else if (x == 'google'){
        
        txt.textContent = 'GOOGLE';
        imagem.src = './src/ico/google.png';
        paragrafo.textContent = '\nFaça aqui sua pesquisa.';
<<<<<<< HEAD
=======
        link.href = 'https://www.google.com.br'
>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    }
    else if (x == 'help'){
        
        txt.textContent = 'AJUDA';
        imagem.src = './src/ico/help.png';
        paragrafo.textContent = '\nPrecisa de ajuda?';
    }
    else if (x == 'mapa'){
        
        txt.textContent = 'GPS';
        imagem.src = './src/ico/mapa.png';
        paragrafo.textContent = '\nDefina seus trajetos.';
<<<<<<< HEAD
=======
        link.href = 'https://www.google.com/maps'
>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    }
    else if (x == 'entretenimento'){
        
        txt.textContent = 'ENTRETENIMENTO';
        imagem.src = './src/ico/pipoca.png';
        paragrafo.textContent = '\nVeja as atrações que estão acontecendo na cidade hoje.\nTente dizer “Hey Carro, quais atrações na cidade hoje?” ou “Hey Carro, o que está passando no cinema hoje?”\nVocê também consegue pesquisar os bares e restaurantes da cidade, basta acessar o aplicativo do Trip Advisor, tente dizer “Hey Carro, abrir Trip Advisor”';
<<<<<<< HEAD
=======
        link.href = './entretenimento.html'
>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    }
    else if (x == 'dispositivos'){
        
        txt.textContent = 'DISPOSITIVOS';
        imagem.src = './src/ico/settings.png';
        paragrafo.textContent = 'Cadastre seus dispositivos inteligentes aqui, tente dizer “Hey Carro, abrir portão da garagem”, ou “Hey Carro, acender luz da garagem”.';
<<<<<<< HEAD
=======
        link.href = './dispositivos.html' 
>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    }
    else if (x == 'usuario'){
        
        txt.textContent = 'CONDUTOR';
        imagem.src = './src/ico/usuario.png';
        paragrafo.textContent = 'Cadastre seu perfil de condutor aqui e configure seu carro para seu conforto e segurança.';
<<<<<<< HEAD
=======
        link.href = './condutor.html'
    }
    else if (x == 'mais'){

        txt.textContent = 'ADICIONAR';
        imagem.src = './src/ico/mais.png';
        paragrafo.textContent = 'Cadastre seus aplicativos aqui.';
    }
    else if (x == 'novarotina'){

        txt.textContent = 'ADICIONAR';
        imagem.src = './src/ico/mais.png';
        paragrafo.textContent = 'Cadastre suas rotinas aqui.';
    }
    else if (x == 'novocondutor'){

        txt.textContent = 'ADICIONAR';
        imagem.src = './src/ico/mais.png';
        paragrafo.textContent = 'Cadastre um novo condutor.';
    }
    else if (x == 'novodispositivo'){

        txt.textContent = 'ADICIONAR';
        imagem.src = './src/ico/mais.png';
        paragrafo.textContent = 'Cadastre um novo dispositivo.';
>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    }
}

function closePopup(){
<<<<<<< HEAD
=======

>>>>>>> 9fa3ed671368ed12cc5336ae5764d97db4d7c88c
    popup.classList.remove("open-popup");
}