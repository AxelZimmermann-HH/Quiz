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
    },
    {
        question: "Wie viele Beine haben drei blaue, fünf grüne und acht gelbe Chamäleons, wenn zwei der gelben nur drei Beine und drei der grünen nur zwei Beine haben?",
        answer1: "66",
        answer2:"69",
        answer3: "70",
        answer4: "68",
        right_answer: 4
    }
]


let currentQuestion = 0;
let correctAnswerCount = 0;
let AUDIO_SUCCESS = new Audio('./sounds/correct.wav');
let AUDIO_FAIL = new Audio('./sounds/false.wav');


function renderQuestion() {
    let question = questions[currentQuestion];
    let allQuestions = questions.length;
    let showQuestionNumber = currentQuestion + 1;
    const progressPercent = Math.round(((currentQuestion) / questions.length) * 100);
    let content = document.getElementById('card-content');
     
    if (gameIsOver()) {
        content.innerHTML = ``;
        content.innerHTML += getQuestionHTML(showQuestionNumber, allQuestions, question, progressPercent);
    } else {
        content.innerHTML = ``;
        content.innerHTML += getEndscreenHTML(correctAnswerCount, allQuestions, progressPercent);
    }
    updateProgressBar(progressPercent);
}


function gameIsOver() {
    return currentQuestion < questions.length
}


function getQuestionHTML(showQuestionNumber, allQuestions, question, progressPercent) {
    return `
        <h5>Frage ${showQuestionNumber} von ${allQuestions}</h5>
        <h1 class="card-title">${question['question']}</h1>
        <div class="button-area">
        <button id="id1" type="button" onclick="answer('answer1', 'id1')" class="btn btn-primary btn-lg">${question['answer1']}</button>
        <button id="id2" type="button" onclick="answer('answer2', 'id2')" class="btn btn-primary btn-lg">${question['answer2']}</button>
        <button id="id3" type="button" onclick="answer('answer3', 'id3')" class="btn btn-primary btn-lg">${question['answer3']}</button>
        <button id="id4" type="button" onclick="answer('answer4', 'id4')" class="btn btn-primary btn-lg">${question['answer4']}</button>
        </div>
        
        <div class="progress">
            <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${progressPercent}%</div>
        </div>
    `
}


function getEndscreenHTML(correctAnswerCount, allQuestions, progressPercent) {
    return `
        <h5>Herzlichen Glückwunsch!</h5>
        <h1 class="card-title">Quiz beendet!</h1>
        <h2>Du hast ${correctAnswerCount} von ${allQuestions} Fragen richtig beantwortet.</h2>
        <button id="" type="button" onclick="playAgain()" class="btn btn-primary btn-lg">Nochmal spielen</button>
        
        <div class="progress">
            <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${progressPercent}%</div>
        </div>
    `
}


function updateProgressBar(progressPercent) {
    let progressBarMain = document.getElementById('progress-bar');
    progressBarMain.style.width = progressPercent + '%';
}


function answer(selection, id) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `id${question['right_answer']}`;

    if (answerIsRight(selectedQuestionNumber, question)) {
        showSuccess(id);      
    } else {
        showFalse(id, idOfRightAnswer)
    }
    
    currentQuestion++;
    setTimeout(renderQuestion, 2000);
}


function answerIsRight(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}


function showSuccess(id) {
    document.getElementById(id).classList.add('bg-success'); 
    document.getElementById(id).classList.add('pulse');
    AUDIO_SUCCESS.play();
    correctAnswerCount++; 
}


function showFalse(id, idOfRightAnswer) {
    document.getElementById(id).classList.add('bg-danger');
    document.getElementById(id).classList.add('pulse');
    document.getElementById(idOfRightAnswer).classList.add('bg-success');
    document.getElementById(idOfRightAnswer).classList.add('pulse');
    AUDIO_FAIL.play();
}


function playAgain() {
    currentQuestion = 0;
    correctAnswerCount = 0;
    renderQuestion();
}