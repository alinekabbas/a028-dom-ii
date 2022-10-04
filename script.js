//Exercicio 1

// function adicionaItem(event) {
//     let novoItem = document.createElement("article")
//     let conteudoItem = document.createTextNode("item")
//     novoItem.appendChild(conteudoItem)
//     const elementoReferencia = document.getElementById("container")
//     elementoReferencia.insertAdjacentElement("beforeend", novoItem)
// }

//Exercicio 2
function adicionaItem() {
    let novoItem = document.createElement("article")
    //let conteudoItem = document.createTextNode("item")
    novoItem.classList.add("item")
    //novoItem.appendChild(conteudoItem)
    novoItem.onclick = removeItem
    const elementoReferencia = document.getElementById("container")
    elementoReferencia.insertAdjacentElement("beforeend", novoItem)
}

//Exercicio 3

function removeItem(event) {
    event.target.remove()
}