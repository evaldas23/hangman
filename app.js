const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    console.log(game1.status)

})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error ${error}`)
    } else {
        console.log(puzzle)
    }
  
})

// Making an http request
//(from: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)

//  //----------------------------------------
// const countryCode = 'LT'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => 
//             country.alpha2Code === countryCode)
//             console.log(country.name)  
//     }
// })

// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
// countryRequest.send()



 // 107 paskaita dar perziureti