function calcular() {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const km = parseFloat(document.getElementById('distancia').value);

    if (!origem || !destino || isNaN(km)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Fatores de emissão (em kg de CO2 por km)
    const fatores = [
        { nome: "Bicicleta", fator: 0 },
        { nome: "Carro", fator: 0.120 },
        { nome: "Ônibus", fator: 0.028 },
        { nome: "Caminhão", fator: 0.800 }
    ];

    const corpoTabela = document.getElementById('corpo-tabela');
    corpoTabela.innerHTML = ""; // Limpa resultados anteriores

    fatores.forEach(item => {
        const emissaoTotal = (km * item.fator).toFixed(2);
        const row = `<tr>
            <td>${item.nome}</td>
            <td><strong>${emissaoTotal} kg</strong></td>
        </tr>`;
        corpoTabela.innerHTML += row;
    });

    document.getElementById('res-trajeto').innerText = `${origem} ➔ ${destino}`;
    document.getElementById('resultado').classList.remove('hidden');
}