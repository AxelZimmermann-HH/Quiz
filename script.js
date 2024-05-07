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

function renderQuestion() {
    let question = questions[currentQuestion];
    
    let content = document.getElementById('card-content');
    content.innerHTML = ``;
    content.innerHTML += `
        <h2 class="card-title">${question['question']}</h2>
        <div class="button-area">
        <button id="id1" type="button" onclick="answer('answer1', 'id1')" class="btn btn-primary btn-lg">${question['answer1']}</button>
        <button id="id2" type="button" onclick="answer('answer2', 'id2')" class="btn btn-primary btn-lg">${question['answer2']}</button>
        <button id="id3" type="button" onclick="answer('answer3', 'id3')" class="btn btn-primary btn-lg">${question['answer3']}</button>
        <button id="id4" type="button" onclick="answer('answer4', 'id4')" class="btn btn-primary btn-lg">${question['answer4']}</button>

        </div>
    `
}

function answer(selection, id) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(id).classList.add('bg-success');        
    } else {
        document.getElementById(id).classList.add('bg-danger');
    }
    currentQuestion++;
    setTimeout(renderQuestion, 2000);
}