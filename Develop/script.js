// set up time variables for workday scheduler
var workDay = [
    {
        id: "0",
        hour: "09:00",
        time: "09",
        ampm: "am",
        cue: ""
    },
    {
        id: "1",
        hour: "10:00",
        time: "10",
        ampm: "am",
        cue: ""
    },
    {
        id: "2",
        hour: "11:00",
        time: "11",
        ampm: "am",
        cue: ""
    },
    {
        id: "3",
        hour: "12:00",
        time: "12",
        ampm: "pm",
        cue: ""
    },
    {
        id: "4",
        hour: "01:00",
        time: "13",
        ampm: "pm",
        cue: ""
    },
    {
        id: "5",
        hour: "02:00",
        time: "14",
        ampm: "pm",
        cue: ""
    },
    {
        id: "6",
        hour: "03:00",
        time: "15",
        ampm: "pm",
        cue: ""
    },
    {
        id: "7",
        hour: "04:00",
        time: "16",
        ampm: "pm",
        cue: ""
    },
    {
        id: "8",
        hour: "05:00",
        time: "17",
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
workDay.forEach(function (thisTime) {
    
    // create rows for each hour of the work day
    var timeRow = $("<form>").attr({"class": "row"});
    $(".container").append(timeRow);
    
    // create column for each hour of the day
    var timeColumn = $("<div>").text(`${thisTime.hour}${thisTime.ampm}`).attr({"class": "col-2 hour"});

    // create rows and <textarea> for inputing scheduled event
    var scheduleColumn = $("<div>").attr({"class": "col-9 description p-0"});
    var scheduleData = $("<textarea>");
    scheduleColumn.append(scheduleData);
    scheduleData.attr("id", thisTime.id);

    // if else statement to create past, present, future tracking
    if (thisTime.time < moment().format("HH")) {
        console.log(thisTime.time);
        scheduleData.attr({"class": "past"})
    } 
    else if (thisTime.time === moment().format("HH")) {
        scheduleData.attr({"class": "present"})
    }
    else if (thisTime.time > moment().format("HH")) {
        scheduleData.attr({"class": "future"})
        console.log(thisTime.time + "future");
    };
    console.log(moment().format("HH"));
    // create column and icon for each save button
    var saveButton = $("<i class='far fa-save'></i>");
    var saveSchedule = $("<button>").attr({"class": "col-1 saveBtn"});
    saveSchedule.append(saveButton);
    timeRow.append(timeColumn, scheduleColumn, saveSchedule);
});

// save data to localStorage
function saveCue() {
    localStorage.setItem("workDay", JSON.stringify(workDay));
};

function displayCue() {
    workDay.forEach(function(_thisTime) {
        $(`#${_thisTime.id}`).val(_thisTime.cue);
    })
};

function init() {
    var storeWorkday = JSON.parse(localStorage.getItem("workDay"));

    if (storeWorkday) {
        workDay = storeWorkday;
    }

    saveCue();
    displayCue();
};

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveInfo = $(this).siblings(".description").children(".future").attr("id");
    workDay[saveInfo].cue = $(this).siblings(".description").children(".future").val();

    saveCue();
    displayCue;
});

init();
