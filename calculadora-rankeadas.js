const resultadoCalculadora = calculadoraPartidas(16, 5);
console.log(resultadoCalculadora)

function calculadoraPartidas(vitoria, derrota) {
    let resultado = vitoria - derrota;
    let nivel;

    switch (true) {
        case resultado <= 10:
            nivel = "Ferro";
            break;
        case resultado <= 20:
            nivel = "Bronze"
            break;
        case resultado <= 50:
            nivel = "Prata";
            break;
        case resultado <= 80:
            nivel = "Ouro";
            break;
        case resultado <= 90:
            nivel = "Diamante";
            break;
        case resultado <= 100:
            nivel = "Lendário";
            break;
        case resultado >= 101:
            nivel = "Imortal";
            break;
    }

    const frase = `O Herói tem de saldo de ${resultado} está no nível de ${nivel}`;
    return frase;
}
