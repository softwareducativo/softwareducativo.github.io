let allNumbers = generateAllBingoNumbers();

function generateAllBingoNumbers() {
    const numbers = [];
    for (let i = 1; i <= 75; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Função que pode ser chamada no professor e no aluno, como a geração de números de bingo
function generateBingoNumber() {
    const randomIndex = Math.floor(Math.random() * allNumbers.length);
    const number = allNumbers.splice(randomIndex, 1)[0];
    return number;
}
