/* ELEMENT DECLARATIONS */
var greetingPanel = `<p>Greeting Panel</p>`;
var quizPanel = `<p>Quiz Panel</p>`;
var resultsPanel = `<p>Results Panel</p>`;


/* APPLICATION FUNCTIONS */
function startQuiz() {
    hideGreetingPanel();
    showQuizPanel();
    startTimer();
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
    //TODO
}


/* INPUT VALIDATION METHODS */
const checkNameInput = () => {
    //TODO
    return false;
}

const checkQuizInputs = () => {
    //TODO
}


/* TIMER STUFF */
const startTimer = () => {
    //TODO
}

const stopTimer = () => {
    //TODO
}


/* UI ELEMENT CONTROL */
function showGreetingPanel() {
    //TODO
}

function hideGreetingPanel() {
    //TODO
}

function showQuizPanel() {
    //TODO
}

function hideQuizPanel() {
    //TODO
}

function showResultsPanel() {
    //TODO
}