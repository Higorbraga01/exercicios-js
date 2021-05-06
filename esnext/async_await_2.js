function gerarNumerosEntre(min, max, numerosProibidos) {
    try {
        if (min > max) [max, min] = [min, max]
        return new Promise((resolve, reject) => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if (numerosProibidos.includes(aleatorio)) {
                reject('Número repetido')
            } else {
                resolve(aleatorio)
            }
        })
    } catch (e) {
        throw "Erro"
    }
}

async function gerarMegaSena(qtdNumeros) {
    const numeros = []
    for (let _ of Array(qtdNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)