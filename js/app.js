// startvalues
let dogName = 'Binky'
let health = 50

// De functie changeDogName neemt een nieuwe naam als argument en verandert de 
// naam van het huisdier in de nieuwe naam als de nieuwe naam niet leeg is. 
// Het werkt ook de weergave van de naam van het huisdier bij.

// Changes the dog name
const changeDogName = newName => {
    // if there is no new name
    if (newName === '') return

    // change dog name to new name
    dogName = newName

    // changes the name on the screen
    const dogNameContainer = document.getElementById('dog-name')
    dogNameContainer.innerText = dogName
}

/**
 * Changes the number on the screen
 * @param {new number which is displayed on the screen} newHealth 
 */

// De functie changeDogName neemt een nieuwe naam als argument en verandert de naam van het huisdier 
// in de nieuwe naam als de nieuwe naam niet leeg is. Het werkt ook de weergave van de naam van het huisdier bij.

const changeHealth = newHealth => {
    const healthContainer = document.getElementById('healthscore')
    healthContainer.innerHTML = 'Leven: ' + newHealth + '%';

    const img = document.getElementById('img')
    const allDogs = ['tamag sad', 'tama standaard', 'tamag res']

    // if health is lower then 50, sad face
    // if health is lower then 70, normal face
    // otherwise happy face
    if (newHealth < 50) {
        img.src = 'images/' + allDogs[0] + '.png'
    } else if (newHealth < 100) {
        img.src = 'images/' + allDogs[1] + '.png'
    } else {
        img.src = 'images/' + allDogs[2] + '.png' 
    }

    
    // veranderd de nieuwe levens van de hond naar de huidige 
    // zodat het spel weet hoeveel levens de hond heeft
    health = newHealth
}

/**
 * Changes the health by the amount of number you add
 * @param {number of health} number 
 * @returns 
 */

// De functies addHealth en loseHealth gebruiken een getal als argument en tellen dat getal op bij of trekken het af van 
// de huidige gezondheidsscore van het huisdier. Ze roepen ook de functie changeHealth aan om de weergave van de gezondheidsscore 
// van het huisdier bij te werken.

const addHealth = (number) => {
    const newNumber = health + number
 
    const maxNumber = 100

    if (newNumber > maxNumber) return

    changeHealth(newNumber)
}

/**
 * Changes the health by the amount of number you subtract
 * @param {number of health} number 
 * @returns 
 */
const loseHealth = (number) => {
    const newNumber = health - number
    const minNumber = 0

    if (newNumber < minNumber) return

    changeHealth(newNumber)
}

// De functie addControls stelt event listeners in voor de knoppen waarmee gebruikers het huisdier 
// kunnen voeren of ermee kunnen spelen, en ook voor een knop waarmee de gebruiker de naam van het 
// huisdier kan wijzigen.

/**
 * makes the button clickable and adds the function
 */
const addControls = () => {
    const bone = document.getElementById('bone-button')
    const chicken = document.getElementById('chicken-button')
    const bal = document.getElementById('ball-button')
    const input = document.getElementById('change-dog-name-input')
    const changeNameButton = document.getElementById('change-dog-name-button')

    bone.addEventListener('click', () => loseHealth(10))
    bal.addEventListener('click', () => loseHealth(10))
    chicken.addEventListener('click', () => addHealth(10))
    
    // gets input and changes the dogname to the dog
    changeNameButton.addEventListener('click', () => {
        const nameFromInput = input.value 
        
        changeDogName(nameFromInput)
    } )
}

/**
 * when the page loads, make the game ready
 */
const onLoad = () => {
    changeDogName(dogName)
    changeHealth(health)
    addControls()
}

window.addEventListener('load', onLoad)
