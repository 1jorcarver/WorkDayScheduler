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
        hour: "5:00",
        time: "5:00",
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

// create form for scheduling work day inside <div>
workDay.forEach(function(thisTime) {
    
    // create rows for each hour of the work day
    var timeRow = $("<form>").attr({"class": "row"});
    $(".container").append(timeRow);
    
    // create column for each hour of the day
    var timeColumn = $("<div>").text(`${thisTime.hour}${thisTime.ampm}`).attr({"class": "col-md-2 hour"});

    // create rows and <textarea> for inputing scheduled event
    var scheduleColumn = $("<div>").attr({"class": "col-md-9 description p-0"});
    console.log(scheduleColumn);
    var scheduleData = $("<textarea>");
    scheduleColumn.append(scheduleData);
    scheduleData.attr("id", thisTime.id);

    // if else statement to create past, present, future tracking
    if (thisTime.time < moment().format("HH")) {
        scheduleData.attr({"class": "past"})
    } 
    else if (thisTime.time === moment().format("HH")) {
        scheduleData.attr({"class": "present"})
    }
    else if (thisTime.time > moment().format("HH")) {
        scheduleData.attr({"class": "future"})
    };

    // create column and icon for each save button
    var saveButton = $("<i class='far fa-save'></i>");
    var saveSchedule = $("<button>").attr({"class": "col-md-1 saveBtn"});
    saveSchedule.append(saveButton);
    timeRow.append(timeColumn, scheduleColumn, saveSchedule);
})

