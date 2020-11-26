
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://github.com/JoaoMarcosRodrigues/aula_javascript") // EM OUTRA ABA
    //window.location.href = "https://github.com/JoaoMarcosRodrigues/aula_javascript" // NA MESMA ABA
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1+n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }

    return validar
}

var idade = prompt("Qual sua idade? ")
console.log(validaIdade(idade))

alert(soma(5,10))
*/

/*
var d = new Date();
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/
/*
var count;
for(count=1; count<=5; count++){
    console.log(count)
}
*/

/*
var count = 0
while(count <= 5){
    console.log(count)
    count++
}
*/

/*
var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/

//var frutas = [{nome: "maca", cor: "vermelha"},
//            {nome: "uva", cor: "roxa"}]
//console.log(frutas)
//alert(frutas[1].nome)

/*
var fruta = {nome: "maca", cor: "vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/

//var lista = ["maca","pera","laranja"]
//lista.push("uva")
//lista.pop()
//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" - "))

//var nome = "João Marcos";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
////alert(nome+ " tem "+n1+" anos");
////alert(n1+n2);
//
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase())
////alert(frase.replace("Japão","Brasil"));