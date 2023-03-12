const welcomeHat = document.querySelector('.talking-hat');

const btnNext = document.querySelector('.btn-next')
const apresentation = document.querySelector(".apresentation")
const quiz = document.querySelector(".quiz")
const questionsTest = document.querySelector('.questions')
const alternative1 = document.querySelector('.alternative1')
const alternative2 = document.querySelector(".alternative2")
const alternative3 = document.querySelector(".alternative3")
const alternative4 = document.querySelector(".alternative4")

let mychoice = document.querySelector("input[type='radio']:checked");



async function talkingHat(){
   let wizardName = prompt('Hello wizard! Please, insert your name:')
    
    welcomeHat.innerText = `"Welcome to Hogwarts, ${wizardName}" `
   
    await delay(3)

    welcomeHat.innerText = `🎵 "Oh you may not think I'm pretty,
    But don't judge on what you see..."`
    await delay(5)

    welcomeHat.innerText = `"...I'll eat myself if you can find
    A smarter hat than me...." 🎵`

    await delay(5)

    welcomeHat.innerText = `"..."`

    await delay(2)

    welcomeHat.innerText = `"Oh I'm sorry. You don't want to hear me sing... It's ok"`

    await delay(4)

    welcomeHat.innerText = `"..."`

    await delay(2)
    
    welcomeHat.innerText = `"Let me see what you're thinking..."`
    await delay(2)

    hideToggle()
    quizStart()
    
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




let quizQuestions = [
{
    question: "You're trapped in a burning building and only have 10 seconds to get out. What would you do?",
    G: "Run and grab my friend that still in the building.",
    R: "If I have a way to save my friend, then yes, but if I don't,  sorry.",
    S: "Save myself, of course!",
    H: "I'll try, but I am not sure!",

},
{
    question: "What's your best trait you think you have got?",
    G: "Bravery",
    R: "Intelligence",
    S: "Ambition",
    H: "Kindness",
  },
{
    question: "Four goblets are placed before you. Which would you choose to drink?",
    G: "The thick, golden liquid, so shiny it hurts your eyes.",
    R: "The sparkling liquid that seems to have diamonds inside.",
    S: "The green liquid that emits vapors that cause strange visions.",
    H: "The pink drink that exudes a scent of cinnamon and ginger.",
    },
{
    question: "What do you think you would see in the Mirror of Erised?",
    G: "I would see myself saving the world from whatever it was",
    R: "I would find myself known for being the smartest wizard at the time",
    S: "I would find myself surrounded by money",
    H: "I would see myself with all the family that died",
   },
{
    question: "What fault do you notice in people that bother you the most?",
    G: "Cowardice",
    R: "Stupidity",
    S: "Dishonesty",
    H: "Laziness",
   },
{
    question: "Have you ever cheated in classes?",
    G: "I have only shared answers to friends in need",
    R: "Never",
    S: "I cheat any moment I get the opportunity",
    H:  "I tried, but never succeeded",
   },
{
    question: "What is your favorite activity?",
    G: "Play sports",
    R: "Read books",
    S: "Make potions",
    H: "Create craft items",
    },
{
    question: "What do you want to achieve before you die?",
    G: "I want to travel the world",
    R: "I want to acquire as many skills as I can",
    S: "Be famous and have a lot of money",
    H: "Make as many friends as possible",
    },
{
    question: "How organized are you in your studies?",
    G: "Only that much is necessary",
    R: "I am the most organized person ever",
    S: "Who studies at all?",
    H: "I'm very organized. But I can improve",
    },
{
    question: "What is your idea of a perfect vacation?",
    G: "Chilling out with friends and taking up new advetures",
    R: "Studyng and preparing or anny anuual test/exam in advance",
    S: "Watch movies and relax",
    H: "Taking up an interactive or skill-based course",
   },
];

       let questionNumb = []
       let questionQuestion = []
       let questionG = []
       let questionR = []
       let questionS = []
       let questionH = []

       for( var ask of quizQuestions){
        questionNumb.push(ask.numb)
        questionQuestion.push(ask.question)
        questionG.push(ask.G)
        questionR.push(ask.R)
        questionS.push(ask.S)
        questionH.push(ask.H)
       }
     
let index = 0
     
function quizStart(){
    questionsTest.innerText = questionQuestion [index]
    alternative1.innerText = questionG [index]
    alternative2.innerText = questionR [index]
    alternative3.innerText = questionS [index]
    alternative4.innerText = questionH [index]  
}

btnNext.onclick = function(e) { 
    e.preventDefault() //it does not let the button refresh the page
    
    nextQuestion()
   
}

function nextQuestion(){
    if(index < quizQuestions.length -1){
    index++
    quizStart()}
    else{
        alert("finish")
    }
}
        
    

    
