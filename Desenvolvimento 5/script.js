let tituloh1 = document.getElementById("titulo")
tituloh1.innerText = "Inserindo título com innerText."

let link = document.querySelector("a")
link.innerText = "Clique aqui para acessar a página"

let lista_ul = document.querySelector("ul")
lista_ul.innerHTML = 
`<li>1º elemento adicionado com inner HTML</li>
<li>2º elemento adicionado com inner HTML</li>
<li>3º elemento adicionado com inner HTML</li>`

let lista_ol = document.getElementById("lista-ordenada")
lista_ol.innerHTML =
`<li><a href="https://www.google.com/">Google</a></li>
<li><a href="https://www.youtube.com/">Youtube</a></li>
<li><a href="https://www.instagram.com/">Instagram</a></li>`