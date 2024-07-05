function generarNumerosAleatorios(min, max, cantidad) {
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(num);
    }
    return numeros;
}

function mostrarNumerosEnPagina(numeros) {
    let numerosContainer = document.getElementById("numeros-container");
    numerosContainer.innerHTML = ""; 

    numeros.forEach((numero, index) => {
        let numeroElement = document.createElement("p");
        numeroElement.textContent = `${index + 1}. ${numero}`;
        numerosContainer.appendChild(numeroElement);
    });
}

document.getElementById("generar-numeros-btn").addEventListener("click", function() {
    const min = 5;  
    const max = 300;  
    const cantidadNumeros = 20;  

    const numerosAleatorios = generarNumerosAleatorios(min, max, cantidadNumeros);
    mostrarNumerosEnPagina(numerosAleatorios);
});