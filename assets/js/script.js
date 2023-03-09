const welcomeHat = document.querySelector('.talking-hat');
let wizardName = prompt('Hello wizard! Please, insert your name:')


function talkingHat(){
    
    welcomeHat.innerText = `"Welcome to Hogwarts, ${wizardName}" `
}
