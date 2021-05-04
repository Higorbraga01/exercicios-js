let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito
console.log(dobro(5));

let ola = function () {
    return 'Olá'
}

ola =  () => 'Olá'

console.log(ola())