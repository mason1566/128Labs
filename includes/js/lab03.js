/* Part 1 Exercise 1 */
function counter(string, char) {
    string = string.toLowerCase();
    const spaces = string.match(/ /g); // match ' ' (space) in string string.

    // error handling incase no spaces are found. Using if..else
    if (spaces == null) {
        stringOutput.innerHTML = `There were <span style="color: red;">no</span> spaces found in the name.`;
    }
    else {
        stringOutput.innerHTML = `There were <span style="color: red;">${spaces.length}</span> spaces found in the name.`;
    }

    char = char.toLowerCase();
    let reg = new RegExp('m', 'g'); // creating a new regex pattern with global parameter
    const chars = char.match(reg); // creates an array with all matches of specified regex (re)

    // error handling incase no matches are found. Using try..catch here
    try { 
        charOutput.innerHTML = `There were <span style="color: red;">${chars.length}</span> M's found in the name.`;
    }
    catch (e) {
        charOutput.innerHTML = `There were <span style="color: red;">no</span> M's found in the name.`;
    }
}

function runExercise1() {
    let string = stringHolder.value;
    let char = charHolder.value;

    counter(string, char);
}


// declare document references:
const stringHolder = document.getElementById("stringHolder"); // counter() string value
const charHolder = document.getElementById("charHolder"); // counter() char value
const exercise1Button = document.getElementById("exercise1Button"); // submit button

const stringOutput = document.getElementById("stringOutput"); // element where counter() output will be injected
const charOutput = document.getElementById("charOutput");

// add event listeners
exercise1Button.addEventListener("click", runExercise1);





/* Part 1 Exercise 2 */
function calculateWages(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let daysInMonth = getDaysInMonth(year, month + 1);
    let weekdays = getWeekdaysInMonth(year, month, daysInMonth);
    
    let minWage = 15.65;
    let dailyHoursWorked = 8;
    let monthSalary = minWage * dailyHoursWorked * weekdays;

    let dateOutput = date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    let outputText = `
        <p>Your date: <span style="color: red;">${dateOutput}</span></p>
        <p>Days in month: <span style="color: blue;">${daysInMonth}</span></p>
        <p>Workdays: <span style="color: purple;">${weekdays}</span></p>
        <p>BC Minimum Wage: <span style="color: green;">$${minWage}</span></p>
        <p>Salary for the month (8 hour workday): <span style="color: gold;">$${monthSalary.toFixed(2)}</span></p>`;

    wagesOutput.innerHTML = outputText;
}

function getDaysInMonth(year, month) { // Use 1 for Jan, 2 for Feb, etc.
    return new Date(year, month, 0).getDate();
}

function getWeekdaysInMonth(year, month, daysInMonth) {
    let startDay = new Date(year, month, 1).getDay(); // Sunday = 0, Saturday = 6
    let weekdays = 0;
    for (let i = 0; i < daysInMonth; i++) {
        let currDay = (i + startDay) % 7;
        if (currDay > 0 && currDay < 6) weekdays++;
        console.log(weekdays)
    }
    return weekdays;
}

function runExercise2() {
    let userDate = dateHolder.value;

    // check if user input is a valid date
    if (isNaN(Date.parse(userDate))) {
        wagesOutput.innerHTML = `<span style="color: red;">Invalid</span> date.`
    }
    else {
        let date = new Date(Date.parse(userDate)); // turn string userDate into a date object
        calculateWages(date);
    }
}

// declaring element references
const dateHolder = document.getElementById("dateHolder");
const wagesOutput = document.getElementById("wagesOutput");
const exercise2Button = document.getElementById("exercise2Button");

// event listeners
exercise2Button.addEventListener("click", runExercise2);





/* Part 2 */
function isItInRange(input) {
    if (input < 0) {
        throw new Error("The value must be zero or greater");
    }
    else if (input <= 2) {
        throw new Error("The value is less than or equal to 2: (" + input + " is <= 2 dummy)");
    }
    else if (input >= 4) {
        valueOutput.innerHTML += `<p>Your value is in the <span style="color: green;">correct range:</span> ${input}</p>`;
    }
    else {
        valueOutput.innerHTML += `<p>Your value is <span style="color: purple;">Over 2:</span> ${input}</p>`;
    }
}

function runPart2() {
    let userNum = valueHolder.value;
    if (!Number(userNum) && userNum != 0) {
        valueOutput.innerHTML = `<span style="color: red">Error:</span> Please enter a number.`
    }
    else {
        valueOutput.innerHTML = `<p>Your number value is: <span style="fontweight: bold;">${userNum}</span></p>`
        try {
            isItInRange(userNum);
        }
        catch (e) {
            valueOutput.innerHTML += `<p style="color: red;">${e}</p>`
        }
    }
}

// element references
const valueHolder = document.getElementById("valueHolder");
const valueOutput = document.getElementById("valueOutput");
const part2Button = document.getElementById("part2Button");

// event listeners
part2Button.addEventListener("click", runPart2);