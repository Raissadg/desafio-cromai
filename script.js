/* 
    Função responsável por calcular o comprimento da hipotenusa.

    A função pega os valores digitados no input através do id.
    Após, calcula a raiz quadrada da soma dos catetos ao quadrado

    A saída é o comprimento da hipotenusa
*/

function calculo() {
    var a = Math.floor(document.getElementById("inputAddress").value);
    var b = Math.floor(document.getElementById("inputAddress2").value);
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("resultado").innerHTML = "O resultado é " + c;
}