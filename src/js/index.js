const botaoAlterarTema =  document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTeama = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click" , () => {
    const modoEscuraEstaAtivo = body.classList.contains("modo-escuro");


   body.classList.toggle("modo-escuro");

   if(modoEscuraEstaAtivo){
        imagemBotaoTrocaDeTeama.setAttribute("src", "./src/imagens/sun.png")

   } else {
    imagemBotaoTrocaDeTeama.setAttribute("src", "./src/imagens/moon.png")
   }
});

