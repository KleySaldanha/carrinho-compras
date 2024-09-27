let total;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoUnit = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let precoTotal = precoUnit * quantidade;
    let carrinho = document.getElementById('lista-produtos');

    if(quantidade <= 0 || isNaN(quantidade)){
        alert('Por favor, adicione uma quantidade válida do produto');
        return;
       }   

    let produtoCarrinho = carrinho.getElementsByClassName('carrinho__produtos__produto');
    let produtoExistente = null;

    for(let i = 0; i < produtoCarrinho.length; i++){
        if(produtoCarrinho[i].textContent.includes(nomeProduto)){
            produtoExistente = produtoCarrinho[i];
            break;
        }
    }

    if(produtoExistente){
        let quantidadeExistente = parseInt(produtoExistente.querySelector('.texto-azul').textContent.split('x')[0]);
        let novaQuantidade = quantidadeExistente + quantidade;
        produtoExistente.innerHTML = `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${novaQuantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoUnit}</span>
        </section>`
    } else {
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoUnit}</span>
        </section>`;
    }

   let subtotal = document.getElementById('valor-total');

   total = total + precoTotal
   subtotal.textContent = `R$ ${total}`;

   document.getElementById('quantidade').value = '';

}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0.00';
    total = 0;
}