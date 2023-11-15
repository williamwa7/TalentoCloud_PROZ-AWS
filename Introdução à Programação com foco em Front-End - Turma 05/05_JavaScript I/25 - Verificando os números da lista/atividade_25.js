let numerosDaSorte = [37, 14, 26, 5, 94, 87];

function avaliarNumeros() {
    for (let i = 0; i < numerosDaSorte.length; i++) {
        
        let numeroAtual = numerosDaSorte[i];

    if (numeroAtual % 2 === 0 && numeroAtual < 50) {
        console.log(numeroAtual + " é par e menor que 50");
    } else if (numeroAtual < 50) {
        console.log(numeroAtual + " é menor que 50");
    } else {
        console.log(numeroAtual + " é maior que 50");
    }
  }
}

avaliarNumeros();