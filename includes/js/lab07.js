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
    else alert("Name must not be blank.");
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
        alert("Please select at least one option for Question 5.");
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

function startQuizCheck() {
    const validName = checkNameInput();
    if (validName) startQuiz();
    else alertUser(greetingPanel, "Invalid Name");
}

function alertUser(panel, message) {
    let panelMessageElement;

    if (panel == greetingPanel) console.log(`${message} in Greeting Panel`);
    else if (panel == quizPanel) console.log(`${message} in Quiz Panel`);
    else if (panel == resultsPanel) console.log(`${message} in Results Panel`);
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

    if (score == 5) alert("Your score: " + score + `/5\nWith a time of ${elapsedTimeInSeconds}\nThats a Perfect Score!`); // didn't have enough time to implement proper modals :(
    else alert("Your score: " + score + `/5\nWith a time of ${elapsedTimeInSeconds}`);
}


quizPanel.hide();
resultsPanel.hide()