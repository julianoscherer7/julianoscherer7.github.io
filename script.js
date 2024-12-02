function sortear() {
    const nomesInput = document.getElementById("nomes").value;
    const nomes = nomesInput.split(",").map(nome => nome.trim()).filter(nome => nome);

    if (nomes.length < 2) {
        document.getElementById("resultado").innerHTML = "<p class='error'>Insira pelo menos dois nomes!</p>";
        return;
    }

    const sorteio = [];
    const nomesRestantes = [...nomes];

    nomes.forEach(nome => {
        let escolhidoIndex;
        do {
            escolhidoIndex = Math.floor(Math.random() * nomesRestantes.length);
        } while (nomesRestantes[escolhidoIndex] === nome && nomesRestantes.length > 1);

        sorteio.push({ amigo: nome, sorteado: nomesRestantes[escolhidoIndex] });
        nomesRestantes.splice(escolhidoIndex, 1);
    });

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    let resultadoHTML = "<h2>Resultado do Sorteio:</h2><ul>";
    sorteio.forEach(par => {
        resultadoHTML += `<li>${par.amigo} → ${par.sorteado}</li>`;
    });
    resultadoHTML += "</ul>";
    document.getElementById("resultado").innerHTML = resultadoHTML;
}
