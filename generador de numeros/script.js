function generarNumero() {
    var numeroAleatorio = Math.floor(Math.random() * 101);
    document.getElementById("resultado").innerHTML = "El número aleatorio generado es: " + numeroAleatorio;
}