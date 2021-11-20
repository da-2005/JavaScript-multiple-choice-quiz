const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
var intervalTime = document.getElementById('count');
var shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    
    
    
}


function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    startButton.classList.add('hide');

}

function showQuestion(question){
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}


function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    startButton.classList.remove('hide');

}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    }else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console log', correct: true}
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'strings', correct: false},
            {text: 'alerts', correct: true},
            {text: 'booleans', correct: false},
            {text: 'numbers', correct: false},
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within _____',
        answers: [
            {text: 'parentheses', correct: true},
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'square brackets', correct: false}
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ____',
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: [
            {text: 'quotes', correct: true},
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parentheses', correct: false}
        ]
    }
];