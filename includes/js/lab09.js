// global fields
var userBookingObj = {};


// date picker stuff
$("#arrivalPicker").datepicker({
    onSelect: (dateText, inst) => {
        setDepartureMinDate(new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay + 1)) // automatically sets the minDate of departurePicker to the selected date + 1
    },
    minDate: 0
});

$("#departurePicker").datepicker({
    minDate: 1
});

const setDepartureMinDate = (date) => {
    $("#departurePicker").datepicker("option", "minDate", date);
}

// room submit function
$("#bookRoomForm").submit((e) => {
    e.preventDefault();
    
    let arrivalDate = $("#arrivalPicker").datepicker("getDate");
    let departureDate = $("#departurePicker").datepicker("getDate");

    let form = document.forms["bookRoom"];
    let roomOptions = form.elements["btnradio"];
    let roomType;

    for (let i = 0; i < roomOptions.length; i++) {
        if (roomOptions[i].checked) {
            roomType = roomOptions[i].labels[0].textContent;
            break;
        }
    }

    setResults(roomType, arrivalDate, departureDate);
})

$("#results").hide();

function setResults(roomType, arrival, departure) {
    $("#roomType").text(roomType)
    $("#arrivalDate").text(arrival.toDateString());
    $("#departureDate").text(departure.toDateString());
    $("#stayLength").text( Math.floor((departure - arrival) / (1000 * 60 * 60 * 24)) + " days"); // converting ms to days

    $("#results").show();
}