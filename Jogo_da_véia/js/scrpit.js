const cells = document.querySelectorAll("[data-cell]") //precisa do colchetes para celecionar algum "data-*"
const container = document.querySelector("[data-container]")
const winnerTextElement = document.querySelector("[data-winnerMessageText]")
const winnerMessage = document.querySelector("[data-winnerMessage]")
const winnerButton = document.querySelector('[data-winnerButton]')

let oTurn
const winnerCobinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const start = () => {
    oTurn = false
    for (const cell of cells) {
        cell.classList.remove('x')
        cell.classList.remove('o')
        cell.removeEventListener('click', clique)
        cell.addEventListener('click', clique, {once: true}) //primeira vez q clicar na célula
        
    }
    hover()
    winnerMessage.classList.remove('show-winner-message')
}

const end = (isDraw) => {
    if (isDraw) {
        winnerTextElement.innerText = 'Embate'
    } else {
        winnerTextElement.innerText = oTurn ? 'Círulo Venceu!' : 'X Venceu!'
    }

    winnerMessage.classList.add("show-winner-message")
}


const winner = (currentPlayer) => {
    return winnerCobinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentPlayer)
        })
    })
}

const draw = () => {
    return [ ...cells].every(cell => {
        cell.classList.contains('x') || cell.classList.contains('o')
    })
}

const mark = (cell, classAdd) => {
    cell.classList.add(classAdd)
}

const hover = () => {
    container.classList.remove("o")
    container.classList.remove("x")

    if(oTurn){
        container.classList.add("o")
    } else {
        container.classList.add("x")
    }
}

const changeTurn = () => {
    oTurn = !oTurn
    hover()
}

const clique = (e) => {
    //colocar x ou o
    const cell = e.target
    const classAdd = oTurn ? "o" : "x"

    mark(cell, classAdd)
    console.log(classAdd);
    //vitória]
    const win = winner(classAdd)
    if (win) {
        console.log('winner');
        end(false)
    }
    //empate
    //mudarplayer
    
    changeTurn()
}

for (const cell of cells) {
    cell.addEventListener('click', clique, {once: true}) //primeira vez q clicar na célula
}

start()
winnerButton.addEventListener('click', start)