let messageDiv = document.getElementById("messageDiv");
let loginBox = document.getElementById("loginForm");
let profileBox = document.getElementById("profileCard");

let navLogin = document.getElementById("navLoginButton");
navLogin.addEventListener('click', () => {
    loginBox.style.display = "flex"
    messageDiv.innerHTML = ``;});

let navLogout = document.getElementById("navLogoutButton");
let navProfile = document.getElementById("navProfileButton");

let loggedIn = false;

profileBox.style.display = "none";
navLogout.style.display = "none";
navProfile.style.display = "none";

// ran when login button is pressed
const loginFunction = () => {
    try {
        checkFirstName();
        checkLastName();
        checkEmail();
        checkAge();
        checkPostalCode();
        checkPhoneNumber();

        userLoggedIn();
    }
    catch (e) {
        messageDiv.innerHTML = `<p style="color: red;">${e}</p>`; // error messages
    }
}

function userLoggedIn() {
    loggedIn = true;

    // hiding login stuff
    loginBox.style.display = "none";
    navLogin.style.display = "none";

    // showing logout stuff
    profileBox.style.display = "flex";
    navLogout.style.display = "block";
    navProfile.style.display = "block";

    // Profile user information
    document.getElementById("profileName").innerText = `${firstName.value} ${lastName.value}`;
    document.getElementById("profileEmail").innerText = `${email.value}`;
    document.getElementById("profileAge").innerText = `${age.value}`;
    document.getElementById("profilePostal").innerText = `${postalCode.value}`;
    document.getElementById("profileNumber").innerText = `${phoneNumber.value}`;
}

// getting form element
const form = document.getElementById("loginForm");

// loginFunction will run when the form element sends a submit event
form.addEventListener('submit', (e) => {
    e.preventDefault(); // done to prevent the page from refreshing (the default submit action)
    loginFunction(); // run the login function
});

/* input elements */
let firstName = document.getElementById("firstNameInput");
let lastName = document.getElementById("lastNameInput");
let email = document.getElementById("emailInput");
let age = document.getElementById("ageInput");
let postalCode = document.getElementById("postalCodeInput");
let phoneNumber = document.getElementById("phoneNumInput");


/* regex checkers for the various form elements */
function checkFirstName() {
    const spaceReg = / /; // making new regex pattern

    if (firstName.value.trim() !== "" && !firstName.value.match(spaceReg)) { // trim function is used because the empty input value is null. trim turns it to an empty string
        //console.log("Valid First Name");
    }
    else if (firstName.value.trim() == "") {
        throw new Error("First Name cannot be blank.")
    }
    else if (firstName.value.match(spaceReg)) {
        throw new Error("First Name cannot contain spaces.")
    }
    else throw new Error("Invalid First Name");
}

function checkLastName() {
    const spaceReg = / /; 

    if (lastName.value.trim() !== "" && !lastName.value.match(spaceReg)) { 
        //console.log("Valid Last Name")
    }
    else throw new Error("Invalid Last Name");
}

function checkEmail() {
    const emailReg = /^\S*@\S*[^\.]\.[^\.].*/;  // may need to change to stop '..' appearing in part before @ according to email syntax from wikipedia 

    if (email.value.trim() !== "" && email.value.match(emailReg)) { 
        //console.log("Valid Email");
    }
    else throw new Error("Invalid Email");
}

function checkAge() {

    if (Number(age.value) && age.value > 0 && age.value < 120) { 
        //console.log("Valid Age")
    }
    else throw new Error("Invalid Age");
}

function checkPostalCode() {
    const postalCodeReg = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/i; 

    if (postalCode.value.trim() !== "" && postalCode.value.match(postalCodeReg)) { 
        //console.log("Valid Postal Code")
    }
    else throw new Error("Invalid Postal Code");
}

function checkPhoneNumber() {
    const phoneReg = /^[0-9]{3}(-| )?[0-9]{3}(-| )?[0-9]{4}$/; 

    if (phoneNumber.value.trim() !== "" && phoneNumber.value.match(phoneReg)) { 
        //console.log("Valid Number");
    }
    else throw new Error("Invalid Phone Number");
}




/* Profile stuff: */

// adding profile card close button funcionality
let profileCloseButton = document.getElementById("profileCloseButton");
profileCloseButton.addEventListener('click', () => profileBox.style.display = "none");

let profileLogoutButton = document.getElementById("profileLogoutButton");

const logoutFunc = () => {
    loggedIn = false;
    profileBox.style.display = "none";
    loginBox.style.display = "flex";
    navLogin.style.display = "block";
    navLogout.style.display = "none";
    navProfile.style.display = "none";

    messageDiv.innerHTML = ``;
};

// if navLogout button is pressed => hide profile stuff and show login stuff
navLogout.addEventListener('click', logoutFunc)
profileLogoutButton.addEventListener('click', logoutFunc);


// if navProfile button is clicked => show profile card
navProfile.addEventListener('click', () => { // arrow functions are fantastic
    profileBox.style.display = "flex";
})