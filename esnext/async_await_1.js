function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promise...'));

async function executar() {
    await esperarPor(2000)
    console.log('Async/ Await')

    await esperarPor(2000)
    console.log('Async/ Await 2...')
}

executar()