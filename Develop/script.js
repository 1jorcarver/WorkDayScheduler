// set up time variables for workday scheduler
var workDay = [
    {
        id: "0",
        hour: "09:00",
        time: "09:00",
        ampm: "am",
        cue: ""
    },
    {
        id: "1",
        hour: "10:00",
        time: "10:00",
        ampm: "am",
        cue: ""
    },
    {
        id: "2",
        hour: "11:00",
        time: "11:00",
        ampm: "am",
        cue: ""
    },
    {
        id: "3",
        hour: "12:00",
        time: "12:00",
        ampm: "pm",
        cue: ""
    },
    {
        id: "4",
        hour: "1:00",
        time: "1:00",
        ampm: "pm",
        cue: ""
    },
    {
        id: "5",
        hour: "2:00",
        time: "2:00",
        ampm: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "3:00",
        time: "3:00",
        ampm: "pm",
        cue: ""
    },
    {
        id: "7",
        hour: "4:00",
        time: "4:00",
        ampm: "pm",
        cue: ""
    },
    {
        id: "8",
        hour: "2:00",
        time: "2:00",
        ampm: "pm",
        cue: ""
    },
]

// retrieve current day to display the date in the header
function displayDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

displayDate();


