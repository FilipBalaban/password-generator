let password1El = document.getElementById("password1-el")
let password1 = ""

let password2El = document.getElementById("password2-el")
let password2 = ""

password1El.textContent = password1
password2El.textContent = password2

// Booleans
let allCharactersPreference = true
let noNumbersPreference = false
let noSpecialPreference = false

// Toggle btns rendering
let specialChrEl = document.getElementById("special-chr-el")
let numberEl = document.getElementById("number-el")
let allChrEL = document.getElementById("all-chr-el")

// All Characters
const charactersArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0",
 "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
 "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
 ".","?",
"/"];

// No special characters
const noSpecialCharactersArr = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0",
 "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

// No numbers
const noNumbersArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
".","?",]

function render() {
    password1El.textContent = password1
    password2El.textContent = password2
}

function getRandomIndex() {
    let randomIndex = 0

    if (allCharactersPreference === true) {
        randomIndex = Math.floor( Math.random() * charactersArr.length ) 
        return randomIndex
    } else if (noSpecialPreference === true) {
        randomIndex = Math.floor( Math.random() * noSpecialCharactersArr.length ) 
        return randomIndex
    } else if (noNumbersPreference === true) {
        randomIndex = Math.floor( Math.random() * noNumbersArr.length ) 
        return randomIndex
    }
    
}

function generatePasswords() {
    password1 = ""
    password2 = ""
    render()

    if (allCharactersPreference === true) {                 // All Characters 

        // Get 15 character passwords
        for (let i = 0; i < 15; i++) {
            // Password 1
            password1 = charactersArr[getRandomIndex()]
            password1El.textContent += password1

            // Password 2
            password2 = charactersArr[getRandomIndex()]
            password2El.textContent += password2
        }

    } else if (noSpecialPreference === true) {              // No Special Characters
        
        for (let i = 0; i < 15; i++) {
            // Password 1
            password1 = noSpecialCharactersArr[getRandomIndex()]
            password1El.textContent += password1

            // Password 2
            password2 = noSpecialCharactersArr[getRandomIndex()]
            password2El.textContent += password2
        }
        
    }   else if (noNumbersPreference === true) {            // No Numbers

        for (let i = 0; i < 15; i++) {
            // Password 1
            password1 = noNumbersArr[getRandomIndex()]
            password1El.textContent += password1

            // Password 2
            password2 = noNumbersArr[getRandomIndex()]
            password2El.textContent += password2
        }

    }
    
    
}

function generateNoNumbers() {
    noNumbersPreference = true
    allCharactersPreference = false
    noSpecialPreference = false

    // Render
    numberEl.textContent = "No numbers ✔" 
    specialChrEl.textContent = "No special characters"
    allChrEL.textContent = "All characters"
}

function generateNoSpecial() {
    noNumbersPreference = false
    allCharactersPreference = false
    noSpecialPreference = true

    // Render
    specialChrEl.textContent = "No special characters ✔"
    numberEl.textContent = "No numbers" 
    allChrEL.textContent = "All characters"
}

function generateAllCharacters() {
    noNumbersPreference = false
    allCharactersPreference = true
    noSpecialPreference = false

    // Render
    allChrEL.textContent = "All characters ✔"
    numberEl.textContent = "No numbers"
    specialChrEl.textContent = "No special characters"
}