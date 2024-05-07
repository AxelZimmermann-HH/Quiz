let questions = [
    {
        question: "Wie viele Beine haben drei Kühe, wenn zwei davon jeweils ein Bein fehlt?",
        answer1: "8",
        answer2:"9",
        answer3: "10",
        answer4: "11",
        right_answer: 3
    },
    {
        question: "Wie viele Beine haben fünf Spinnen, wenn drei davon nur fünf Beine haben?",
        answer1: "28",
        answer2:"29",
        answer3: "27",
        answer4: "30",
        right_answer: 1
    },
    {
        question: "Wie viele Beine haben 1001 Tausendfüßler?",
        answer1: "1 Million",
        answer2:"1.001.000",
        answer3: "1.010.000",
        answer4: "1.000.100",
        right_answer: 2
    }
]

let currentQuestion = 0;
let correctAnswerCount = 0;


function renderQuestion() {
    let question = questions[currentQuestion];
    let allQuestions = questions.length;
    let showQuestionNumber = currentQuestion + 1;
    const progressPercent = ((currentQuestion) / questions.length) * 100;

    let content = document.getElementById('card-content');
    
    
    if (currentQuestion < questions.length) {
    content.innerHTML = ``;
    content.innerHTML += `
        <h5>Frage ${showQuestionNumber} von ${allQuestions}</h5>
        <h1 class="card-title">${question['question']}</h1>
        <div class="button-area">
        <button id="id1" type="button" onclick="answer('answer1', 'id1')" class="btn btn-primary btn-lg">${question['answer1']}</button>
        <button id="id2" type="button" onclick="answer('answer2', 'id2')" class="btn btn-primary btn-lg">${question['answer2']}</button>
        <button id="id3" type="button" onclick="answer('answer3', 'id3')" class="btn btn-primary btn-lg">${question['answer3']}</button>
        <button id="id4" type="button" onclick="answer('answer4', 'id4')" class="btn btn-primary btn-lg">${question['answer4']}</button>
        </div>
        <div class="progress-bar">
            <div class="progress-bar-fill" id="progress-bar-fill"></div>
        </div>
    `
    } else {
        content.innerHTML = ``;
        content.innerHTML += `
        <h5>Herzlichen Glückwunsch!</h5>
        <h1 class="card-title">Quiz beendet!</h1>
        <h2>Du hast ${correctAnswerCount} von ${allQuestions} Fragen richtig beantwortet.</h2>
        <button id="" type="button" onclick="playAgain()" class="btn btn-primary btn-lg">Nochmal spielen</button>
        <div class="progress-bar">
            <div class="progress-bar-fill" id="progress-bar-fill"></div>
        </div>
    `
    }
    updateProgressBar(progressPercent);
}

function updateProgressBar(progressPercent) {
    let progressBarFill = document.getElementById('progress-bar-fill');
    progressBarFill.style.width = progressPercent + '%';
}

function answer(selection, id) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    

    let idOfRightAnswer = `id${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(id).classList.add('bg-success'); 
        document.getElementById(id).classList.add('pulse');
        correctAnswerCount++;       
    } else {
        document.getElementById(id).classList.add('bg-danger');
        document.getElementById(id).classList.add('pulse');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        document.getElementById(idOfRightAnswer).classList.add('pulse');

    }
    currentQuestion++;
    setTimeout(renderQuestion, 2000);
    
}

function playAgain() {
    currentQuestion = 0;
    correctAnswerCount = 0;
    renderQuestion();
}