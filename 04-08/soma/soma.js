function calcular() {

const num1=parseFloat(document.getElementById("num1").value);
const num2=parseFloat(document.getElementById("num2").value);
const operacao = document.getElementById("operacao").value;
let resultado;

switch (operacao) {
    case "soma":
 resultado= num1 + num2;
 break;
 default:
 resultado = "Operação inválida";
}

document.getElementById("resultado").textContent = `Resultado:
${resultado}`;
return false;

}