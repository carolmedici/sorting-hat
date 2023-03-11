const welcomeHat = document.querySelector('.talking-hat');
let wizardName = prompt('Hello wizard! Please, insert your name:')
const btnNext = document.querySelector('.btn-next')
const apresentation = document.querySelector(".apresentation")
const quiz = document.querySelector(".quiz")
const questionsTest = document.querySelector('.questions')
const alternative1 = document.querySelector('.alternative1')
const alternative2 = document.querySelector(".alternative2")
const alternative3 = document.querySelector(".alternative3")
const alternative4 = document.querySelector(".alternative4")

let mychoice = document.querySelector("input[type='radio']:checked");

btnNext.addEventListener('click', nextQuestion)

async function talkingHat(){
    
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
    
    welcomeHat.innerText = `"Let me see what you're thinking..."`
    await delay(2)

    hideToggle()
    Quiz()
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
    numb: 1,
    question: "You're trapped in a burning building and only have 10 seconds to get out. What would you do?",
    G: "Run and grab my friend that still in the building.",
    R: "If I have a way to save my friend, then yes, but if I don't,  sorry.",
    S: "Save myself, of course!",
    H: "I'll try, but I am not sure!",

},
{
    numb: 2,
    question: "What's your best trait you think you have got?",
    G: "Bravery",
    R: "Intelligence",
    S: "Ambition",
    H: "Kindness",
  },
{
    numb: 3,
    question: "Four goblets are placed before you. Which would you choose to drink?",
    G: "The thick, golden liquid, so shiny it hurts your eyes.",
    R: "The sparkling, shiny black liquid that looks like it has a lot of cut diamonds in it.",
    S: "The mysterious green liquid that emits vapors that make you have strange visions.",
    H: "The smooth, thick and pink drink that exudes a delicious smell of cinnamon and ginger.",
    },
{
    numb: 4,
    question: "What do you think you would see in the Mirror of Erised?",
    
    G: "I would see myself saving the world from whatever it was",
    R: "I would see myself graduated, known to be the smartest wizard of the age",
    S: "I would find myself surrounded by money",
    H: "I would see myself with all the family that died",
   },
{
    numb: 5,
    question: "What fault do you notice in people that bother you the most?",
    G: "Cowardice",
    R: "Stupidity",
    S: "Dishonesty",
    H: "Laziness",
   },
{
    numb: 6,
    question: "Have you ever cheated in classes?",
    G: "I have only shared answers to friends in need",
    R: "Never",
    S: "I cheat any moment I get the opportunity",
    H:  "I tried, but never succeeded",
   },
{
    numb: 7,
    question: "What is your favorite activity?",
    G: "Play sports",
    R: "Read books",
    S: "Make potions",
    H: "Create craft items",
    },
{
    numb: 8,
    question: "What do you want to achieve before you die?",
    G: "I want to travel the world",
    R: "I want to acquire as many skills as I can",
    S: "Be famous and have a lot of money",
    H: "Make as many friends as possible",
    },
{
    numb: 9,
    question: "How organized are you in your studies?",
    G: "Only that much is necessary",
    R: "I am the most organized person ever",
    S: "Who studies at all?",
    H:  "I am pretty doog. But there s still some scope of improvement",
    },
{
    numb: 10,
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

      
       for( var index = 0; index < quizQuestions.length; index++){

    
       for( var ask of quizQuestions){
        questionNumb.push(ask.numb)
        questionQuestion.push(ask.question)
        questionG.push(ask.G)
        questionR.push(ask.R)
        questionS.push(ask.S)
        questionH.push(ask.H)
       }
    }


    function Quiz(){
    questionsTest.innerText = questionQuestion [index]
    alternative1.innerText = questionG [index]
    alternative2.innerText = questionR [index]
    alternative3.innerText = questionS [index]
    alternative4.innerText = questionH [index]       

    }   

function nextQuestion(){
    if (!mychoice) { // if no option was checked
        return alert("Choose an option!");
}else{
   
    questionsTest.innerText = questionQuestion [index]
    alternative1.innerText = questionG [index]
    alternative2.innerText = questionR [index]
    alternative3.innerText = questionS [index]
    alternative4.innerText = questionH [index] 
}
}
    


/*
var Index = 0;



btnNext.addEventListener("click", function(){

if(index +1 == dialogueHat.length){
    index = 0;
}else{
    index = index + 1;
}
            welcomeHat.innerText = dialogueHat[index]


})*/



