/* GLOBAL VARIABLES */
var questionsArray = [];
var username;
var score;
var startTime;
var endTime;
let elapsedTimeInSeconds;


/* ELEMENT DECLARATIONS */
var greetingPanel = $('#greetingPanel');
var quizPanel = $('#quizPanel');
var resultsPanel = $('#resultsPanel');

var resultsScore = $('#resultsScore');
var resultsTime = $('#resultsTime');

var quizGreeting = $('#quizGreeting');


/* Modal Stuff */
const myModal = new bootstrap.Modal(document.getElementById('modal'));

function setModalHTML(html) {
    $('#modalContent').html(html);
}

// html for the different modals
let nameErrorModal = `<div class="modal-body">
                            <h3 class="text-center py-3">Please enter a name.</h3> 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>`;

let questionsErrorModal = `<div class="modal-body">
                                <h3 class="text-center py-3">Please provide an answer for: Question 5</h3> 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>`;

let resultsModal;                   

// helper function to set results modal html to users score
const getResultsModal = () => {
    let perfectScore = (score == 5) ? `<h5>Thats a PERFECT SCORE!</h5>` : "";
    resultsModal = `<div class="modal-body">
                            <h4 style="text-shadow: 3px 3px 0 rgb(0, 0, 0); color: rgb(250 255 60); font-weight: bolder;">You Scored ${score}/5!</h4>
                            <h5 class="ms-5" style="text-shadow: 2px 2px 0 white;">With a time of ${elapsedTimeInSeconds}. Impressive!</h5>
                            ${perfectScore}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>`;    
    return resultsModal;   
}


/* EVENT HANDLERS */
$(document).ready(function() {
    $('#nameForm').submit((e) => {
        e.preventDefault();
        startQuizPressed();
    });

    $('#quizForm').submit((e) => {
        e.preventDefault();
        endQuizPressed();
    })
});

$('#Question1HintAnswer').hide();
$('#Question2HintAnswer').hide();
$('#Question3HintAnswer').hide();
$('#Question4HintAnswer').hide();
$('#Question5HintAnswer').hide();

$('#Question1Hint').hover(() => {
    $('#Question1HintAnswer').fadeIn(1000)
});
$('#Question2Hint').hover(() => {
    $('#Question2HintAnswer').fadeIn(1000)
});
$('#Question3Hint').hover(() => {
    $('#Question3HintAnswer').fadeIn(1000)
});
$('#Question4Hint').hover(() => {
    $('#Question4HintAnswer').fadeIn(1000)
});
$('#Question5Hint').hover(() => {
    $('#Question5HintAnswer').fadeIn(1000)
});



/* APPLICATION FUNCTIONS */
function startQuizPressed() {
    if (checkNameInput()) {
        username = $('#nameField').val();
        startQuiz();
    }
    else {
        myModal.show();
    }
}

function startQuiz() {
    hideGreetingPanel();
    showQuizPanel();
    startTimer();

    quizGreeting.text(`Hello ${username}. GOOD LUCK!`)
}

function endQuizPressed() {
    // Check if at least one checkbox is checked for Question5
    let question5Checked = $('input[name="Question5"]:checked').length > 0;
        
    if (!question5Checked) {
        setModalHTML(questionsErrorModal);
        myModal.show();
        return;
    }

    endQuiz();
}

function endQuiz() {
    hideQuizPanel();
    stopTimer();
    calculateResults();
    showResultsPanel();
}


function calculateResults() {
    let form = document.forms['quiz'];
    let Question1 = form.elements['Question1'];
    let Question2 = form.elements['Question2'];
    let Question3 = form.elements['Question3'];
    let Question4 = form.elements['Question4'];
    let Question5 = form.elements['Question5'];

    score = 0;

    if (Question1[0].checked) score++;
    if (Question2[2].checked) score++;
    if (Question3[3].checked) score++;
    if (Question4[1].checked) score++;
    if (Question5[0].checked && Question5[1].checked) score++;



}


/* INPUT VALIDATION METHODS */
const checkNameInput = () => {
    return $('#nameField').val().length > 0;
}


/* TIMER STUFF */
const startTimer = () => {
    startTime = new Date();
}

const stopTimer = () => {
    endTime = new Date();
    elapsedTimeInSeconds = (endTime - startTime) / 1000;
}


/* UI ELEMENT CONTROL */
function showGreetingPanel() {
    greetingPanel.show();
}

function hideGreetingPanel() {
    greetingPanel.hide();
}

function showQuizPanel() {
    quizPanel.show();
}

function hideQuizPanel() {
    quizPanel.hide();
}

function showResultsPanel() {
    resultsPanel.show();

    resultsScore.text(`You scored ${score}/5!`)
    resultsTime.text(`With a time of ${elapsedTimeInSeconds} seconds. Impressive!`)

    setModalHTML(getResultsModal());
    myModal.show();
}





quizPanel.hide();
resultsPanel.hide();
setModalHTML(nameErrorModal);