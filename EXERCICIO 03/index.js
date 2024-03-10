const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}
const totalItens = carrinho.produtos.reduce((acc, item) => acc + item.qtd, 0);
const itemsArray = (carrinho.produtos)
const totalAPagar = itemsArray.reduce((acc, item) => acc + item.qtd * item.precoUnit, 0) / 100;



console.log(`Cliente: ${carrinho.nomeDoCliente}`);
console.log(`Total de itens: ${totalItens} itens`);
console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);



