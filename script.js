

const campoTexto = document.getElementById('meuCampoTexto');
const contador = document.getElementById('contadorCaracteres');
const limite = parseInt(campoTexto.getAttribute('maxlength'));
const inputDigitar = document.getElementById('meuCampoTexto');
const listaDisplay = document.getElementById('listaDeItens');
const displayBox = document.querySelector('.display');
let displayVisivel = false;

function atualizarContador() {
    const digitados = campoTexto.value.length;
    const restantes = limite - digitados;
    contador.textContent = `${restantes}`;

    if (restantes > limite * 0.5) {
        contador.style.color = 'lightgreen';
    } else if (restantes > limite * 0.2) {
        contador.style.color = 'orange';
    } else {
        contador.style.color = 'red';
    }
}

campoTexto.addEventListener('input', atualizarContador);

// Inicializa o contador
atualizarContador();

inputDigitar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const textoDigitado = inputDigitar.value.trim();

        if (textoDigitado !== "") {
            if (!displayVisivel) {
                displayBox.style.display = 'flex'; // Ou 'block'
                displayBox.classList.add('visivel'); // Adiciona a classe para a animação
                displayVisivel = true;
            }

            const novoItemLista = document.createElement('li');
            novoItemLista.textContent = textoDigitado;
            listaDisplay.appendChild(novoItemLista);
            inputDigitar.value = "";
        }
    }
});