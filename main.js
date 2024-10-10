function getRandomNumber() {
    let randomNum = Math.floor(Math.random()*13) + 1
    if (randomNum > 10) {
        return 10
    }else if (randomNum === 1) {
        return 11
    }else {
        return randomNum
    }
}
let cards = []

const newButton = document.querySelector('.new-card')
let sumNumCards = 0
const cardPar = document.querySelector('.card')
const sumPar = document.querySelector('.sum')
let myCard = ''
const result = document.querySelector('.result')


function startGame( )  {
    const firstCard = getRandomNumber()
    const secondCard = getRandomNumber()
    cards = [firstCard , secondCard]
    let sumNumCards = 0
    myCard = ''
    newButton.style = `cursor:pointer;`
    for ( i = 0 ; i < cards.length ; i ++){
        sumNumCards += cards[i]
        myCard += ` < ${cards[i]} > `
    }
    if(sumNumCards === 22) {
        sumNumCards = 21
    }
    
    cardPar.innerHTML = "Your Cards : " + myCard 
    sumPar.innerHTML = "Sum :" + sumNumCards
    
    if(sumNumCards === 21) {
        result.style.scale = 1
        result.innerHTML =`Hey <br>
                            YOU HAVE BLACKJACK
                            <br>YOU WIN !!`
    }else {
        result.style.scale = 0
    }
}

function newCard() {
    cards.push(getRandomNumber())
    console.log(cards)
    sumNumCards =0
    myCard = ''
    for ( i = 0 ; i < cards.length ; i ++){
        sumNumCards += cards[i]
        myCard += ` < ${cards[i]} >  `
    }
    cardPar.innerHTML = "Your Cards : " + myCard 
    sumPar.innerHTML = "Sum :" + sumNumCards
    console.log(sumNumCards)
    if (sumNumCards === 21) {
        result.style.scale = 1
        result.innerHTML =`Hey <br>
                            YOU HAVE BLACKJACK
                            <br>YOU WIN !!`
                            newButton.style = `display:none;`
    }else if (sumNumCards > 21) {
        result.style.scale = 1
        result.innerHTML =`Hey <br>
                            <br>YOU LOSE ;)`
                            newButton.style = `display:none;`
    }else {
        result.style.scale = 0
        newButton.style = `display:block;`
    }

}


