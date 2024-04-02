// date picker stuff
$("#arrivalPicker").datepicker({
    onSelect: (dateText, inst) => {
        setDepartureMinDate(new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay + 1)) // automatically sets the minDate of departurePicker to the selected date + 1
    },
    minDate: 0
});

$("#departurePicker").datepicker({
    onSelect: (dateText, inst) => {
        console.log(dateText)
    },
    minDate: 1
});

const setDepartureMinDate = (date) => {
    $("#departurePicker").datepicker("option", "minDate", date);
}