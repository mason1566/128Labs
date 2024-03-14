const createTable = () => { 
    let name = prompt("What is your name?");
    let amount = parseFloat(prompt(`Hello ${name}! Enter room price:`));
    let taxrate = parseFloat(prompt("Enter tax rate:"));
    let roomCount = parseInt(prompt("Enter number of rooms needed:"));

    let total = (amount * 0.01 * taxrate) + amount;
    total = total * roomCount;

    document.getElementById("greeting").innerHTML = `<h4 class="text-center my-2">Hey ${name}, here are the <span class="text-success">results</span>!</h4>`

    document.getElementById("tableHolder").innerHTML = `
            <table class="table table-dark table-striped mb-0">
                <tr>
                    <td>Amount:</td>
                    <td>$${amount}</td>
                </tr>
                <tr>
                    <td>Tax Rate:</td>
                    <td>${taxrate}%</td>
                </tr>
                <tr>
                    <td>Number of Rooms:</td>
                    <td>${roomCount}</td>
                </tr>
                <tr>
                    <td>Total Amount</td>
                    <td>$${total.toFixed(2)}</td>
                </tr>
            </table>`;
}

// event listener for button generator
const generate = document.getElementById("generate");

generate.addEventListener("click", createTable);