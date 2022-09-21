let simples = true

const loop = () => {

    let capital = Number(document.getElementById("capital").value)
    let taxa = Number(document.getElementById("taxa").value)
    let tempo = Number(document.getElementById("tempo").value)

    simples = document.getElementById("tipo").selectedIndex == 0

    const juro = simples ? juros(capital, taxa, tempo) : juros(capital, taxa, tempo) - capital

    const montante = simples ? capital + juro : juros(capital, taxa, tempo)

    document.getElementById("juros").value = "R$ " + juro.toFixed(2).toString()
    document.getElementById("montante").value = "R$ " + montante.toFixed(2).toString()

    window.requestAnimationFrame(loop)

}

const juros = (captial , taxa , tempo) => simples ?  captial * (taxa / 100) * tempo : captial * Math.pow(1 + (taxa / 100) , tempo)

loop()