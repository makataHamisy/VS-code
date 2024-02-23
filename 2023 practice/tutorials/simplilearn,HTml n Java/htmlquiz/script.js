const startButton =document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')

const questionContainerElement =document.getElementById('question-container')
const questionElement =document.getElementById('question')
const answerButton =document.getElementById('answer-buttons')

let shuffledQuestions,correctQuestionsIndex;
letquizScore =0;


startButton.addEventListener('click',startGame)

nextButton.addEventListener('click' ,() =>{
    correctQuestionsIndex++
    setnextquestion()
})



function startGame(){
    startButton.classList.add('hide')
    showQuestions=questions.sort(() =>Math.random() - 0.5)
    correcctQuestionsIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextquestion(quizScore= 0)
}

function setnextquestion(){
    resetstate();
    showQuestions(shuffledQuestions[correcctQuestionsIndex])
}


function showQuestions(question) {
    questionElement.innerText= question.question;
    question.answers.foreach((answer) =>{
        const button=document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if( answer.correct) {
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    })
}



function resetstate(){
    clearStatusclass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstchild) {
        answerButtonElement.removechild(answerButtonElement.firstchild)
    }
}



function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusclass(document.body,correct)
    Array.from(answerButtonElement.children).foreach((button)=>{
        setStatusclass(button,button.dataset.correct)
    })
    if(shuffledQuestions.lenght>currecctQuestionsIndex +1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct)
    quizScore++
}
document.getElementById('right-answers').innerText= quizScore




function setStatusclass(element,correct){
    clearStatusclass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
    
}




function clearStatusclass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions=[
    {
        question: 'which one of this is a javascript framework',
        answers :[
            {text: 'python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false},
        ],
    },

    {
        question: 'who is the president of Kenya',
        answers :[
        {text: 'Raila Odinga', correct: false},
        {text: 'Mwai Kibaki', correct: false},
        {text: 'William Ruro', correct: true},
        {text: 'Uhuru Kenyatta', correct: false},
    ],
    },

    {
        question: 'what is 4*3',
        answers :[
        {text: '16', correct: false},
        {text: '13', correct: false},
        {text: '12', correct: true},
        {text: '14', correct: false},
    ],
    },



    ]