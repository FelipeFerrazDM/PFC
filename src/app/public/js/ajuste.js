const secao = document.getElementById("secao-conteudo")

if (window.matchMedia("(max-width: 480px)").matches) {

    secao.className = "fs-4 agrotoxicos pt-5"

} else {
    
    secao.className = "mx-5 fs-4 agrotoxicos p-3"

}