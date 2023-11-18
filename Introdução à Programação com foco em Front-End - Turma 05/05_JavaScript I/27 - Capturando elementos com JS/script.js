let titulo = document.getElementById("titulo");
let listaUl = document.querySelector("ul");
let link = document.getElementById("link");
let listaOl = document.getElementById("lista-ordenada");

titulo.innerText = "Capturando elementos com JS";
link.innerText = "PROZ Educação";

listaUl.innerHTML = `
    <li>Primeiro Item</li>
    <li>Segundo Item</li>
    <li>Terceiro Item</li>
`;

listaOl.innerHTML =
	'<li><a href="https://g1.globo.com/" target="_blank">G1</a></li>' +
	'<li><a href="https://www.uol.com.br/" target="_blank">UOL</a></li>' +
	'<li><a href="https://gauchazh.clicrbs.com.br/" target="_blank">GZH</a></li>';
