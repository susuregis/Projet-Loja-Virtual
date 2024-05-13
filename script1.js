function finalizar(){
    swal({
        title: "Compra adicionada ao carrinho",
        text: "Clique em OK para continuar",
        icon: "success",
      });

}


function preto() {
    
    var imagem = document.getElementById("minhaImagem");
    imagem.src = "https://static.zara.net/assets/public/a5b3/cbe9/75cb4c5abfef/2ed98a330f6d/4000.jpg?ts=1696238213000&w=563"
}

function azul() {
    
    var imagem = document.getElementById("minhaImagem");
    imagem.src = "https://static.zara.net/assets/public/87ca/4070/1d7149138c07/8a6b837f6602/05039655409-e1/05039655409-e1.jpg?ts=1699960353933&w=563"
}

function bege() {
    
    var imagem = document.getElementById("minhaImagem");
    imagem.src = "https://static.zara.net/assets/public/8b58/3e02/d5cb4602b78a/2e53e55d850f/4000.jpg?ts=1696238219833&w=563"
}

function amarelo() {
    
    var imagem = document.getElementById("minhaImagem");
    imagem.src = "https://static.zara.net/assets/public/066b/05e7/12344306aca0/b3f24d358d35/4000.jpg?ts=1696238217732&w=563"
}

function atualizarValor() {
    const precoUnitario = 129; 
    const select = document.getElementById("quantidade"); 
    const quantidade = parseInt(select.value); 
    
    const valorTotal = precoUnitario * quantidade; 

    const resultado = document.getElementById("valor-total");
    resultado.innerText = `R$ ${valorTotal.toFixed(2)}`; 
  }