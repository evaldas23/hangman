const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
  

})

getPuzzle("2", (error, puzzle) => {
    if (error) {
        console.log(`Error ${error}`)
    } else {
        console.log(puzzle)
    }
  
}) 

//Chalange

getCountry("LT", (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)

    }
} )

// Making an http request
//(from: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)

//  //----------------------------------------




 // 107 paskaita dar perziureti