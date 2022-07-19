let password1El = document.getElementById("password1-el")
let password1 = 0

let password2El = document.getElementById("password2-el")
let password2 = 0

password1El.textContent = password1
password2El.textContent = password2

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomIndex() {
    let randomIndex = Math.floor( Math.random() * characters.length ) 
    return randomIndex
}

function generatePasswords() {
    password1 = ""
    password2 = ""
    password1El.textContent = password1
    password2El.textContent = password2
    for (let i = 0; i < 15; i++) {
        password1 = characters[getRandomIndex()]
        password1El.textContent += password1
        password2 = characters[getRandomIndex()]
        password2El.textContent += password2
    }
    
    
}