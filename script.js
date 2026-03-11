function calcular(){

let peso=parseFloat(document.getElementById("peso").value);
let alturaInput=document.getElementById("altura").value;

// verifica se tem vírgula ou ponto
if(!alturaInput.includes(",") && !alturaInput.includes(".")){
alert("Digite a altura com vírgula ou ponto. Ex: 1,75 ou 1.75");
return;
}

// converte vírgula para ponto
alturaInput = alturaInput.replace(",", ".");
let altura=parseFloat(alturaInput);

if(!peso || !altura){
alert("Preencha peso e altura corretamente");
return;
}

let imc=peso/(altura*altura);
imc=imc.toFixed(1);

document.getElementById("imc").innerHTML=imc;

let categoria="";
let cor="";

if(imc <= 15.9){
categoria="Magreza grave";
cor="#f1c40f";
}

else if(imc <= 16.9){
categoria="Magreza moderada";
cor="#f1c40f";
}

else if(imc <= 18.4){
categoria="Magreza leve";
cor="#f1c40f";
}

else if(imc <= 24.9){
categoria="Saudável";
cor="#2ecc71";
}

else if(imc <= 29.9){
categoria="Sobrepeso";
cor="#e74c3c";
}

else if(imc <= 34.9){
categoria="Obesidade Grau I";
cor="#e74c3c";
}

else if(imc <= 39.9){
categoria="Obesidade Grau II";
cor="#e74c3c";
}

else{
categoria="Obesidade Grau III";
cor="#e74c3c";
}

document.getElementById("categoria").innerHTML=categoria;
document.getElementById("painel").style.background=cor;

}
