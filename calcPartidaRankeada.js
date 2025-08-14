// Calculadora de Partidas Rankeadas
// Função para calcular o saldo e determinar o nível
function calcularRank(vitorias, derrotas) {
    // Variável para armazenar o saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estruturas de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    return {
        saldo: saldoVitorias,
        nivel: nivel
    };
}

// Função para exibir o resultado
function exibirResultado(vitorias, derrotas) {
    let resultado = calcularRank(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);
    return `O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`;
}


console.log("=== CALCULADORA DE PARTIDAS RANKEADAS ===\n");
function calcularRankJogador(vitorias, derrotas) {

    if (vitorias < 0 || derrotas < 0) {
        return "Erro: Vitórias e derrotas devem ser números positivos!";
    }

    if (typeof vitorias !== 'number' || typeof derrotas !== 'number') {
        return "Erro: Vitórias e derrotas devem ser números!";
    }

    return exibirResultado(vitorias, derrotas);
}

function analisarDesempenho(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let totalJogos = vitorias + derrotas;
    let winRate = totalJogos > 0 ? (vitorias / totalJogos * 100).toFixed(1) : 0;

    let resultado = calcularRank(vitorias, derrotas);

    console.log(`Vitórias: ${vitorias}`);
    console.log(`Derrotas: ${derrotas}`);
    console.log(`Saldo: ${saldo}`);
    console.log(`Total de jogos: ${totalJogos}`);
    console.log(`Taxa de vitórias: ${winRate}%`);
    console.log(`Nível: ${resultado.nivel}`);


    let performance = winRate >= 60 ? "Excelente" :
        winRate >= 50 ? "Boa" :
            winRate >= 40 ? "Regular" : "Precisa melhorar";

    console.log(`Performance: ${performance}`);
    console.log(`Mensagem: O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);
}

analisarDesempenho(50, 25);