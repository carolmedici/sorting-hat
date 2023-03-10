const welcomeHat = document.querySelector('.talking-hat');
let wizardName = prompt('Hello wizard! Please, insert your name:')
const btnNext = document.querySelector('.btn-next')
const apresentation = document.querySelector(".apresentation")
const quiz = document.querySelector(".quiz")

async function talkingHat(){
    
    welcomeHat.innerText = `"Welcome to Hogwarts, ${wizardName}" `
   
    await delay(3)

    welcomeHat.innerText = `"Oh you may not think I'm pretty,
    But don't judge on what you see..."`
    await delay(5)

    welcomeHat.innerText = `"...I'll eat myself if you can find
    A smarter hat than me...."`

    await delay(5)

    welcomeHat.innerText = `"..."`

    await delay(2)

    welcomeHat.innerText = `"Oh I'm sorry. You don't want to hear me sing... It's ok"`

    await delay(4)
    
    welcomeHat.innerText = `"Let me see what you're thinking..."`
    await delay(2)

    hideToggle()
}
    
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}



function hideToggle(){
    apresentation.classList.toggle('hide')
    quiz.classList.toggle('hide')
}



/*
var dialogueHat = [
{
    dialogue:`"Welcome to Hogwarts, ${wizardName}" `
},
{
    dialogue: `"Oh you may not think I'm pretty,
    But don't judge on what you see..."`
 },
 {
    dialogue: `"...I'll eat myself if you can find
    A smarter hat than me...."`
 },
 {
    dialogue: `"..."`
 },
 {
    dialogue: `"Oh I'm sorry. You don't want to hear me sing... It's ok"`
 },
 {
    dialogue: `"Let me see what you're thinking..."`
 },
];



var Index = 0;



btnNext.addEventListener("click", function(){

if(index +1 == dialogueHat.length){
    index = 0;
}else{
    index = index + 1;
}
            welcomeHat.innerText = dialogueHat[index]


})



}*/