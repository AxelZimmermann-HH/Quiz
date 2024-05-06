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

function renderQuestion1() {
    let question = questions[currentQuestion];
    
    let content = document.getElementById('card-content');
    content.innerHTML = ``;
    content.innerHTML += `
        <h2 class="card-title">${question['question']}</h2>
        <div class="button-area">
        <button id="answer1" type="button" onclick="answer('answer1')" class="btn btn-primary btn-lg">${question['answer1']}</button>
        <button id="answer2" type="button" onclick="answer('answer2')" class="btn btn-primary btn-lg">${question['answer2']}</button>
        <button id="answer3" type="button" onclick="answer('answer3')" class="btn btn-primary btn-lg">${question['answer3']}</button>
        <button id="answer4" type="button" onclick="answer('answer4')" class="btn btn-primary btn-lg">${question['answer4']}</button>

        </div>
    `
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');        
    } else {
        document.getElementById(selection).classList.add('bg-danger');
    }
    currentQuestion++;
    setTimeout(renderQuestion1, 2000);
}