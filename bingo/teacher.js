document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generate-btn");
    const resetBtn = document.getElementById("reset-btn");
    const currentNumberDiv = document.getElementById("current-number");
    const bingoNumbersDiv = document.getElementById("bingo-numbers");
    let numbersSorteados = [];

    // Função para gerar um número aleatório entre 1 e 90
    function generateNumber() {
        let randomNumber;
        if(numbersSorteados.length < 50) {
            do {
                randomNumber = Math.floor(Math.random() * 50) + 1;
            } while (numbersSorteados.includes(randomNumber)); // Garante que o número não se repita
            numbersSorteados.push(randomNumber);
        }
        return randomNumber;
    }

    // Função para atualizar a lista de números sorteados
    function updateBingoNumbers() {
        bingoNumbersDiv.innerHTML = ''; // Limpa a lista anterior de números
        numbersSorteados.sort((a, b) => parseInt(a) - parseInt(b));
        numbersSorteados.forEach(number => {
            const numberDiv = document.createElement("div");
            numberDiv.classList.add("number");
            numberDiv.textContent = number;

            // Se o número já foi sorteado, marca ele
            if (number === parseInt(currentNumberDiv.textContent)) {
                numberDiv.classList.add("checked");
            }

            bingoNumbersDiv.appendChild(numberDiv);
        });
    }

    // Evento para gerar um novo número e atualizar a lista
    generateBtn.addEventListener("click", function() {
        const newNumber = generateNumber();
        currentNumberDiv.textContent = `${newNumber == undefined ? 'Fim do jogo' : newNumber}`;
        updateBingoNumbers();
    });

    // Evento para resetar os números
    resetBtn.addEventListener("click", function() {
        numbersSorteados = [];
        currentNumberDiv.textContent = "00";
        updateBingoNumbers();
    });
});
