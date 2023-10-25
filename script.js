const conteudoFinal = document.querySelector("#conteudoFinal");
const entradaNumero = document.querySelector("#entradaNumero");
arrayNumerosCompleto = [];
b = [" "];

document.querySelector("#inserirNumeroNoArray").addEventListener('click', function (e) {
    e.preventDefault();

    arrayNumerosCompleto.push(entradaNumero.value);
    conteudoFinal.innerHTML = `Entrada: [${arrayNumerosCompleto}]`
})

document.querySelector("#verificarNumeros").addEventListener('click', function (e) {
    e.preventDefault();

    if (arrayNumerosCompleto.length === 0 || arrayNumerosCompleto <= 0) {
        arrayNumerosCompleto.push("-1");
    } else {
        for(i = 0; i < arrayNumerosCompleto.length; i++){
            if(arrayNumerosCompleto[i] %2 ==0){
                arrayNumerosCompleto[i] = 0
            }
        }

    }
    conteudoFinal.innerHTML = `Saída: [${arrayNumerosCompleto}]`
})