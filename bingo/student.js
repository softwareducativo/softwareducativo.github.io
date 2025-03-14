document.addEventListener("DOMContentLoaded", function() {
    const cartelaDiv = document.getElementById("cartela");
    const generateCartelaBtn = document.getElementById("generate-cartela");

    // Função para gerar a cartela de bingo
    function generateCartela() {
        const confirmation = confirm("Deseja gerar uma nova cartela e perder a atual?");
        
        if (confirmation) {
            cartelaDiv.innerHTML = ''; // Limpa a cartela anterior
            const cartelaNumbers = generateUniqueCartelaNumbers(); // Gera os números únicos para a cartela

            // Ordena os números em ordem crescente
            cartelaNumbers.sort((a, b) => a - b);

            // Adiciona os números à cartela como frações
            cartelaNumbers.forEach(number => {
                const numberDiv = document.createElement("div");
                numberDiv.classList.add("bingo-number");
                numberDiv.textContent = generateRandomFraction(number); // Formato fração

                // Adiciona o evento de clique para marcar os números
                numberDiv.addEventListener("click", function() {
                    numberDiv.classList.toggle("checked");
                });

                cartelaDiv.appendChild(numberDiv);
            });
        }
    }

    // Função para gerar números únicos e aleatórios para a cartela
    function generateUniqueCartelaNumbers() {
        const numbers = [];
        while (numbers.length < 25) { // Gerando 25 números
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }

    // Função para gerar uma fração própria com numerador e denominador até 2 casas decimais
    function generateRandomFraction(targetNumber) {
        let numerator, denominator;

        // Garante que a fração seja própria e o resultado seja entre 1 e 90
        do {
            denominator = Math.floor(Math.random() * 45); // Denominador entre 2 e 90
            numerator = targetNumber * denominator; // Numerador ajustado para produzir o número alvo
        } while (numerator > 99 || denominator > 90 || numerator / denominator !== targetNumber || denominator == 1); // Garantir que o numerador é válido

        return `${numerator}/${denominator}`; // Retorna a fração no formato numerador/denominador
    }

    // Gera a cartela inicial ao carregar a página
    generateCartela();

    // Regenera a cartela ao clicar no botão, com confirmação
    generateCartelaBtn.addEventListener("click", generateCartela);
});
