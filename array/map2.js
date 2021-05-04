const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Cardeno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenaPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenaPreco);
console.log(resultado)