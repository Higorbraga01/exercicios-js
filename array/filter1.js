const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]



console.log(produtos.filter(function (p) {
    return p.fragil && p.preco >= 500
}))

const verificaPreco = p => p.preco >= 500
const verificaFragil = p => p.fragil

console.log(produtos.filter(verificaPreco).filter(verificaFragil))