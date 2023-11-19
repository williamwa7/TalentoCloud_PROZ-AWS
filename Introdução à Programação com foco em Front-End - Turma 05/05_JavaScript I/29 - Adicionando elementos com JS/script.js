let tituloProduto = document.createElement('h1');
tituloProduto.innerHTML = 'Produtos: ';
document.body.appendChild(tituloProduto);

let produto1 = document.createElement('div');
produto1.innerHTML = `
    <img src="https://cdn.awsli.com.br/1960/1960866/produto/230636526/grupo-de-2-objetoscamiseta-roxa-lh9p221l6d.jpg" width="200">
    <h2>Camiseta Lilás</h2>
    <p>Camiseta De Poliester Roxa </br>(para sublimação).</p>
    <p>Preço: R$ 39,99</p>
`;
document.body.appendChild(produto1);

let produto2 = document.createElement('div');
produto2.innerHTML = `
    <img src="https://cdn.awsli.com.br/2500x2500/1960/1960866/produto/230640574/grupo-de-2-objetoscamiseta-verde-1b9zonq7gu.jpg" width="200">
    <h2>Camiseta Verde</h2>
    <p>Camiseta De Poliester Verde </br>(para sublimação).</p>
    <p>Preço: R$ 39,99</p>
`;
document.body.appendChild(produto2);