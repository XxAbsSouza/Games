const cells = document.querySelectorAll("[data-cell]") //precisa do colchetes para celecionar algum "data-*"

let oTurn
let xTurn

for (const cell of cells) {
    cell.addEventListener('click', clique, {once: true})
}

const clique = () => {
    //colocar x ou o

    //vitória
    //empate
    //mudarplayer
}