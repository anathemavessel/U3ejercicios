document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'bean',
            img: 'images/Bean.jpg'
        },
        {
            name: 'Dagmar',
            img: 'images/Dagmar.jpg'
        },
        {
            name: 'Elfo',
            img: 'images/Elfo.jpg'
        },
        {
            name: 'Zog',
            img: 'images/Zog.jpg'
        },
        {
            name: 'Luci',
            img: 'images/Luci.jpg'
        },
        {
            name: 'Oona',
            img: 'images/Oona.jpg'
        },
        {
            name: 'bean',
            img: 'images/Bean.jpg'
        },
        {
            name: 'Dagmar',
            img: 'images/Dagmar.jpg'
        },
        {
            name: 'Elfo',
            img: 'images/Elfo.jpg'
        },
        {
            name: 'Zog',
            img: 'images/Zog.jpg'
        },
        {
            name: 'Luci',
            img: 'images/Luci.jpg'
        },
        {
            name: 'Oona',
            img: 'images/Oona.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('¡Presionaste la misma imagen!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('¡Encontraste un par!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Lo siento, intenta de nuevo')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if    (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = '¡Felicidades! ¡Encontraste todas!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
