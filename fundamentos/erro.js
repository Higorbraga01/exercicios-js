 function tratatErroELancar(error) {
     throw new Error('....');
 }

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratatErroELancar(e);
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj);