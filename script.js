//Função para caulcular a média das notas
function calcularMedia(){

    //Pega os valores dos compos
    var n1= parseFloat(document.getElementById('nota1').value);
    var n2= parseFloat(document.getElementById('nota2').value);

        //Verifica se são números válidos
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira notas válidas!");
        return;
    }

    //Calcular a média
    var media = (n1+ n2) / 2;

    //Mostra o resultado
    document.getElementById('resultado').innerText = "A média é: " + media.toFixed(2);
}
