let dadosRelatorio = {}

function calcular(){

let peso=parseFloat(document.getElementById("peso").value)
let alturaInput=document.getElementById("altura").value

if(!alturaInput){
alert("Digite a altura")
return
}

if(!alturaInput.includes(",") && !alturaInput.includes(".")){
alert("Digite a altura com vírgula ou ponto. Ex: 1,75 ou 1.75")
return
}

alturaInput = alturaInput.replace(",", ".")
let altura=parseFloat(alturaInput)

if(!peso || !altura){
alert("Preencha peso e altura corretamente")
return
}

let imc = peso/(altura*altura)
let imcValor = imc.toFixed(1)

document.getElementById("imc").innerHTML = imcValor

/* animação do resultado */

let imcElemento = document.getElementById("imc")

imcElemento.classList.add("animar")

setTimeout(()=>{
imcElemento.classList.remove("animar")
},400)

let categoria=""
let cor=""
let dica=""

/* CLASSIFICAÇÃO */

if(imc <= 15.9){

categoria="Magreza grave"
cor="#f1c40f"
dica="Procure um médico ou nutricionista."

}

else if(imc <= 16.9){

categoria="Magreza moderada"
cor="#f1c40f"
dica="Aumente a ingestão de alimentos nutritivos."

}

else if(imc <= 18.4){

categoria="Magreza leve"
cor="#f1c40f"
dica="Melhore a alimentação com proteínas e carboidratos saudáveis."

}

else if(imc <= 24.9){

categoria="Saudável"
cor="#2ecc71"
dica="Continue mantendo alimentação equilibrada e exercícios."

}

else if(imc <= 29.9){

categoria="Sobrepeso"
cor="#e74c3c"
dica="Reduza alimentos ultraprocessados e faça atividade física."

}

else if(imc <= 34.9){

categoria="Obesidade Grau I"
cor="#e74c3c"
dica="Procure orientação médica para reeducação alimentar."

}

else if(imc <= 39.9){

categoria="Obesidade Grau II"
cor="#e74c3c"
dica="Procure acompanhamento médico e nutricional."

}

else{

categoria="Obesidade Grau III"
cor="#e74c3c"
dica="Risco elevado. Procure acompanhamento médico."

}

/* atualizar tela */

document.getElementById("categoria").innerHTML = categoria
document.getElementById("painel").style.background = cor

/* RELATÓRIO */

let relatorioHTML = `
<h3>Relatório de Saúde</h3>
<p><b>IMC:</b> ${imcValor}</p>
<p><b>Classificação:</b> ${categoria}</p>
<p><b>Dica:</b> ${dica}</p>
`

document.getElementById("relatorio").innerHTML = relatorioHTML

/* salvar dados */

dadosRelatorio = {
imc: imcValor,
categoria: categoria,
dica: dica
}

}

/* GERAR PDF */

function baixarPDF(){

if(!dadosRelatorio.imc){
alert("Calcule o IMC primeiro")
return
}

const { jsPDF } = window.jspdf
const doc = new jsPDF()

doc.setFontSize(18)
doc.text("Relatório de IMC", 20, 20)

doc.setFontSize(12)
doc.text("IMC: " + dadosRelatorio.imc, 20, 40)
doc.text("Classificação: " + dadosRelatorio.categoria, 20, 50)

doc.text("Recomendação:", 20, 70)

doc.text(dadosRelatorio.dica, 20, 80, {maxWidth:160})

doc.save("relatorio_imc.pdf")

}

/* NOVO CÁLCULO */

function novoCalculo(){

document.getElementById("peso").value=""
document.getElementById("altura").value=""
document.getElementById("idade").value=""

document.getElementById("imc").innerHTML="0.0"
document.getElementById("categoria").innerHTML=""
document.getElementById("relatorio").innerHTML=""

document.getElementById("painel").style.background="#dfe6ee"

/* APAGAR QR CODE */

document.getElementById("qrcode").innerHTML=""

}

function gerarQR(){

let link = "https://diegodonascimentoconfessor.github.io/Calculadora_IMC/"

document.getElementById("qrcode").innerHTML=""

new QRCode(document.getElementById("qrcode"),{
text: link,
width: 150,
height: 150
})

}