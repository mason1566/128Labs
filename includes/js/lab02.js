
// room calculation
let nums = [];
let mean;
let median;

function compareNumbers(a, b) {
    return a - b;
}

function calculateStats() {
    nums = [];

    nums[0] = parseInt(document.getElementById("input1").value);
    nums[1] = parseInt(document.getElementById("input2").value);
    nums[2] = parseInt(document.getElementById("input3").value);

    mean = parseFloat((nums[0] + nums[1] + nums[2]) / 3).toFixed(2);
    
    median = nums.sort(compareNumbers)[1];
    
    document.getElementById("middle").innerText = "$" + median;
    document.getElementById("mean").innerText = "$" + mean;
}



// hotel fullness percentage
let perc;
let textarea;

function calculateBookings() {
    perc = document.getElementById("hotel-booking").value;
    textarea = document.getElementById("booking-alert");
    
    if (isNaN(Number(perc)) || perc == '' || Number(perc) < 0 || Number(perc) > 100) {
        textarea.innerHTML = `<h3><span style="color: purple;">Incorrect</span> - not between 0-100.</h3>`;
    }
    else {
        perc = Number(perc);
        if (perc >= 0 && perc <= 50) {
            textarea.innerHTML = `<h3><span style="color: red;">${perc}%</span> booked!</h3>`;
        }
        else if (perc > 50 && perc <= 64) {
            textarea.innerHTML = `<h3><span style="color: black;">${perc}%</span> booked!</h3>`;
        }
        else if (perc > 64 && perc <= 79) {
            textarea.innerHTML = `<h3><span style="color: yellow;">${perc}%</span> booked!</h3>`;
        }
        else if (perc > 79 && perc <= 90) {
            textarea.innerHTML = `<h3><span style="color: blue;">${perc}%</span> booked!</h3>`;
        }
        else if (perc > 90 && perc <= 100) {
            textarea.innerHTML = `<h3><span style="color: green;">${perc}%</span> booked!</h3>`;
        }
    }
}



// iterating given input
let itInput;
let iterationText;

function iterateMe() {
    itInput = document.getElementById("iteration-input").value;

    if (itInput == '') itInput = '*';

    iterationText = '';

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            iterationText += itInput;
        }
        iterationText += `\n`;
    }
    for (let i = 4; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            iterationText += itInput;
        }
        iterationText += `\n`;
    }

    document.getElementById("iteration-text").innerText = iterationText;
}




// Whos Faster logic
let alexa;
let siri;
let alexaColour;
let siriColour;
let winnerText = ``;

let winnerElement = document.getElementById("winner");
let alexaElement = document.getElementById("alexa-speed");
let siriElement = document.getElementById("siri-speed");

function whosFaster() {
    alexa = parseInt(document.getElementById("alexa-input").value);
    siri = parseInt(document.getElementById("siri-input").value);

    if (alexa > siri) {
        winnerText = `<p><span style="color: peru; font-weight: bold;">Alexa</span> gets there first!</p>`;
        alexaColour = "blue";
        siriColour = "red";
    }
    else if (alexa < siri) {
        winnerText = `<p><span style="color: royalblue; font-weight: bold;">Siri</span> gets there first!</p>`;
        alexaColour = "red";
        siriColour = "blue";
    }
    else if (siri == alexa && Number(siri)) {
        winnerText = `<p>It is a <span style="color: green; font-weight: bold;">TIE.</span></p>`;
        alexaColour = "green";
        siriColour = "green"
    }
    else {
        winnerText = `<p>Your input generated an <span style="color: red; font-weight: bold;">error</span></p>`;
    }


    if (Number(siri) && Number(alexa)) {
        alexaElement.innerText = "" + alexa;
        alexaElement.style.color = alexaColour;
        
        siriElement.innerText = "" + siri;
        siriElement.style.color = siriColour;
    }
    winnerElement.innerHTML = winnerText;
}


// statistics button event listener
const stats = document.getElementById("statsButton");
stats.addEventListener("click", calculateStats);

// hotel booking event listener
const booking = document.getElementById("bookingButton");
booking.addEventListener("click", calculateBookings);

// iteration button event listener
const iterate = document.getElementById("iterationButton");
iterate.addEventListener("click", iterateMe);

// whosFaster button event listener
const whosFasterButton = document.getElementById("whosFasterButton");
whosFasterButton.addEventListener("click", whosFaster);