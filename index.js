//calculando as partidas rankeadas
function calculateLevel(wins, losses) {
    //fazendo o cálculo do saldo das partidas
    let winBalance = wins - losses;

    //determinando o nível
    let level;
    if (wins < 10) {
            level = "Ferro";
        } else if (wins >= 11 && wins <= 20) {
            level = "Bronze";
        } else if (wins >= 21 && wins <= 50) {
            level = "Prata";
        } else if (wins >= 51 && wins <= 80) {
            level = "Ouro";
        } else if (wins >= 81 && wins <= 90) {
            level = "Diamante";
        } else if (wins >= 91 && wins <= 100) {
            level = "Lendário";
        } else {
             level = "Imortal";
        }

    //retornando resultados
    return {
        winBalance: winBalance,
        level: level
    };

}

let result = calculateLevel(35, 12);
console.log("O Herói tem saldo de " + result.winBalance + " e está no nível de " + result.level);
