var nivel = 0
var quantVitorias = 0
var quantDerrotas = 0
var totalPartidas = 0
var rank

function booleanAleatorio() {
    return Math.random() < 0.5
}

function jogar() {
    if(booleanAleatorio()) {
        quantVitorias++
    } else {
        quantDerrotas++
    }
    totalPartidas++
}

do {
    jogar()
} while (totalPartidas < 125)

    if (quantVitorias < 10 && quantVitorias > 0) {
        rank = "Ferro";
    } else if (quantVitorias < 21) {
        rank = "Bronze";
    } else if (quantVitorias < 51) {
        rank = "Prata";
    } else if (quantVitorias < 81) {
        rank = "Ouro";
    } else if (quantVitorias < 91) {
        rank = "Diamante";
    } else if (quantVitorias < 101) {
        rank = "Lendário";
    } else if (quantVitorias >= 101) {
        rank = "Imortal";
    } else {
        rank = "Sem rank";
    }

console.log("Vitórias: " + quantVitorias + 
    "\nDerrotas:" + quantDerrotas +
    "\nRank: " + rank
)