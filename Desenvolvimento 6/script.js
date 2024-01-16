let titulo = document.createElement("h1")
titulo.innerText = "Jogos para PC"
titulo.id = "titulo"
let body = document.querySelector("body")
body.appendChild(titulo)

let imagem = document.createElement("img")
imagem.src = "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png"
body.appendChild(imagem)

let template = document.createElement("div")
template.innerHTML = 
`<h2>Red Dead Redemption 2</h2>
<p>Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.</p>
<h2>Preço: R$199,99</h2>`
body.appendChild(template)
