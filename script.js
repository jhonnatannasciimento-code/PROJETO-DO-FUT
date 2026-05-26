const destaques = [

{
nome:"João",
titulo:"Artilheiro da Semana",
foto:"imagens/atletas/joao.jpg",
numero:5
},

{
nome:"Pedro",
titulo:"Garçom da Semana",
foto:"imagens/atletas/pedro.jpg",
numero:4
}

];

const cards = document.getElementById("cards");

destaques.forEach(atleta => {

cards.innerHTML += `

<div class="card">

<img src="${atleta.foto}" width="150">

<h3>${atleta.titulo}</h3>

<p>${atleta.nome}</p>

<p>${atleta.numero}</p>

</div>

`;

});
function login(){

let email = document.getElementById("email").value;

if(email === "admin@pelada.com"){

location.href="admin.html";

}else{

location.href="ranking.html";

}

}